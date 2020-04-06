import axios from "axios";
import { API_KEY } from "./key";
const base = "https://finnhub.io/api/v1/stock/candle?symbol=";

export const formatAPIRequest = (symbol, timeframe, startDate, endDate) => {
  return new Promise((resolve, reject) => {
    const url =
      base +
      symbol +
      "&resolution=" +
      timeframe +
      "&from=" +
      startDate +
      "&to=" +
      endDate +
      API_KEY;
    const result = [];
    axios
      .get(url)
      .then((res) => {
        const o = res.data.o;
        const h = res.data.h;
        const l = res.data.l;
        const c = res.data.c;
        const t = res.data.t;

        for (let i = 0; i < o.length; i++) {
          result.push({
            x: new Date(t[i]) *1000,
            y: [o[i], h[i], l[i], c[i]],
          });
        }
        console.log(result)
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getTickerSymbols = () => {
  return new Promise((resolve, reject) => {
    const url = "https://finnhub.io/api/v1/stock/symbol?exchange=US" + API_KEY;
    axios
      .get(url)
      .then((res) => {
        const tickers = [];
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          const t = data[i].symbol;
          tickers.push({
            key: i,
            value: t,
            displayValue: t + " " + data[i].description,
          });
        }
        resolve(tickers);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const convertFromDateToUNIXTimeStamp = (date) => {
  const result = new Date(date).getTime() / 1000;
  return result.toString();
};

export const getTickerExpectedReturns = (symbol, timeframe, startDate, endDate) => {
  return new Promise((resolve, reject) => {
    const url =
      base +
      symbol +
      "&resolution=" +
      timeframe +
      "&from=" +
      startDate +
      "&to=" +
      endDate +
      API_KEY;
    console.log(url)
    axios
      .get(url)
      .then((res) => {
        let sum = 0;
        const c = res.data.c;
        for (let i = 0; i < c.length; i++) {
          if(i >= c.length - 1){
            sum += c[i + 1] - c[i]/c[i + 1] * 100;
          }
        }
        const average = sum / c.length;
        console.log(average)
        resolve(average);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



