import React from 'react'

const TableHeader = props => {
    return(
        <tr>
                
                <th>
                    Last
                </th>
                <th>
                    Volume
                </th>
                <th>
                    Delta
                </th>
                <th>
                    Gamma
                </th>
                <th>
                    Theta
                </th>
                <th>
                    Vega
                </th>
                <th>
                    IV
                </th>
                <th>
                    bid
                </th>
                <th>
                    Ask
                </th>
                <th>
                    Strike
                </th>
            </tr>
    )
}   
export default TableHeader