import React, {useState, useEffect} from 'react'
import {getOptionData} from '../../shared/functions'
import Row from '../Row/Row'
import {optionValues} from "../../shared/utility"

const Option = ({ticker, expirationDate, optionDisplay} ) => {
    const [optionData, setOptionData] = useState([])

    useEffect(()=> {
        const data = getOptionData(ticker, expirationDate)  
        data.then(data => setOptionData(data))
        .catch(err => console.log(err)) // Handle it and Render User Feed back in a modal
    },[ticker])
    console.log(optionData)
    let rows = null
    if(optionData.length > 0 ) {
            rows = optionData.map((contract, key) => {
                return <Row key={contract.contractName} optionDisplay={optionDisplay} option={contract}></Row>
            })
    }
    console.log(optionDisplay)
    const keysToDisplay = Object.keys(optionDisplay)

   let headitems = keysToDisplay.map((val, key) => {
        return <th key ={key}>{optionValues[val]}</th>
    })

    
    return(
        <div>
            <h2>Calls</h2>
            <table>
                <thead>
                    <tr>
                       {headitems}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
             
        </div>

       
       
    )
}
export default Option