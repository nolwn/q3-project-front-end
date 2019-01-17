import React from 'react'
import { connect } from 'react-redux'
import { BarChart, XAxis, YAxis, Legend, Bar, CartesianGrid, Tooltip } from 'recharts'
import { cards } from '../utilities/utilities'

console.log(cards)

const convertedManaCosts = (cards) => {
    return cards.map(card => {
        let convertedManaCost = 0
        for (let property in card) {
            if (property === 'red' ||
                property === 'blue' ||
                property === 'black' ||
                property === 'white' ||
                property === 'green' ||
                property === 'colorless') {
                convertedManaCost += card[property]
            }
        }

        return convertedManaCost
    })
}

const groupCosts = (costs) => {
    const graphObj = {}
    const graphData = []

    for( let i = 1; i <= 7; i++ ) {
        graphObj[i] = { name: i, cards: 0 }
    }

    costs.reduce((acc, cost) => {
        if (graphObj[cost]) {
            graphObj[cost].cards++
        } else if (cost > 7) {
            graphObj[7].cards++
        }

    }, graphObj)

    for ( const bar in graphObj ) {
        graphData.push(graphObj[bar])
    }

    return graphData
}

console.log(convertedManaCosts(cards))
console.log(groupCosts(convertedManaCosts(cards)))

const CurveGraph = (props) =>
    <div className='BarChart'>
        <BarChart
            width={400}
            height={300}
            data={groupCosts(convertedManaCosts(cards))}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cards" fill="#8884d8" />
        </BarChart>
    </div>


const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(CurveGraph)
