import React from 'react'

import { cards } from '../utilities/utilities'
import DeckCard from './DeckCard'

const DeckCards = (props) =>
    <div>
        {
            cards.map(card => <DeckCard card={ card } />)
        }
    </div>

export default DeckCards
