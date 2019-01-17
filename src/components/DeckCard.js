import React, { Component } from 'react'
import Modal from 'react-modal'

import cards from '../utilities/utilities'

export default class DeckCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        console.log(this.translateCost())
    }

    translateCost = () => {
        const types = [
            'red',
            'blue',
            'black',
            'green',
            'white',
            'colorless'
        ]

        return types.reduce((acc, type) => {
            if (this.props.card[type] !== 0) {
                acc[type] = this.props.card[type]
            }
            return acc
        }, {})
    }


    getCost = () => {
        const cost = this.translateCost()
        console.log(cost)
        const images = []
        const imageURLs = {
            red: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/87/R.svg?version=3b5a5cc001a7ae6282b24606e9e99715',
            blue: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/U.svg?version=99a0e26dd02040b072e33af91a6ab198',
            green: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/88/G.svg?version=6ebca1fee33aaf3c3fc1cd39a4f782df',
            white: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/8e/W.svg?version=6e6c411768c4bf5a947dfa973207799b',
            black: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/2/2f/B.svg?version=0a87a78acd60c4f2074a0c9e4eb651a5'
        }

        if (cost.colorless) {
            images.push( <span className='colorless-cost'> {  cost.colorless } </span> )
        }

        for (let type in cost) {
            for (let i = 0; i < cost[type]; i++) {
                if (type !== 'colorless')
                images.push(
                    <img
                    src={ imageURLs[type] }
                    height='15'
                    width='15'
                    alt={ type }
                    className='color-cost'
                    />
                )
            }
        }

        return images

    }



    render = () => {
        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-25%',
                transform             : 'translate(-50%, -50%)',
                backgroundColor       :  "gray",
                border                : "2px black solid"
            }
        }

        return (
            <div>
                <button>-</button>
                <button>+</button>
                { this.props.card.qty } x
                { this.props.card.name }
                <span className='card-cost'>{ this.getCost() }</span>
            </div>
        )
    }
}
