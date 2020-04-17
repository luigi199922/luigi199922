const express = require("express");
const router = new express.Router();
const User = require("../models/User.js");
const auth = require("../middleware/auth");
const validator = require("validator");
const userValidation = require("../models/UserValidation")

router.get("/users/me", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send("User Deleted Successfully");
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "email", "first_name", "last_name"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid Updates" });
  }
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send({ message: "Logged Out Successfully" });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(["Unable to Log in With The Provided Credentials"]);
  }
});

router.post("/users/create", async (req, res) => {
  const error = [];
  userValidation(req.body.email, req.body.password, error)

  try {
    if (error.length > 0) {
      throw new Error();
    }
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(error);
  }
});

router.get("/users/favorite", auth, async (req, res) => {
  res.status(200).send(req.user.favoritePokemons);
});

router.post("/users/favorite", auth, async (req, res) => {
  try {
    req.user.favoritePokemons.push(req.body);
    await req.user.save();
    res.status(200).send(req.user.favoritePokemons);
  } catch (e) {
    res.status(400).send();
  }
});

router.delete("/users/favorite", auth, async (req, res) => {
  try {
    const isSamePokemon = (pokemon) => pokemon.name == req.body.name;
    const index = req.user.favoritePokemons.findIndex(isSamePokemon);
    req.user.favoritePokemons.splice(index, 1);
    await req.user.save();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
