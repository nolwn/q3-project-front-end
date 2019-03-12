import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import QtyButtons from './QtyButtons'
import { decrement } from '../actions/deckCards'

class DeckCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
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
            if (this.props[type] !== 0) {
                acc[type] = this.props[type]
            }
            return acc
        }, {})
    }


    getCost = () => {
        const cost = this.translateCost()
        const images = []
        const imageURLs = {
            red: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg?version=60170f319a53b4c3410c43cdbb95699f',
            blue: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg?version=f798d6a151a43adc05e23e534adea262',
            green: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg?version=cf85f35170391f8fbeb037dc18cc3c50',
            white: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg?version=d74ba6b898f8815799b1506eb06fdf74',
            black: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg?version=ce85e9f6be68b450719ddd2f2ad08548'
        }

        if (cost.colorless) {
            images.push( <span key={ 'colorless' } className='colorless-cost'> {  cost.colorless } </span> )
        }

        for (let type in cost) {
            for (let i = 0; i < cost[type]; i++) {
                if (type !== 'colorless')
                images.push(
                    <img key={ i + type }
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
        return (
            <div>
                <QtyButtons
                    qty={ this.props.qty }
                    id = { this.props.id }
                    />
                { this.props.qty }x
                { ' ' + this.props.name }
                <span className='card-cost'>{ this.getCost() }</span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ decrement }, dispatch)

export default connect(null, mapDispatchToProps)(DeckCard)
