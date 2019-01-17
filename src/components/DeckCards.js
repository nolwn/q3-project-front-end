import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { cards } from '../utilities/utilities'
import { decrement } from '../actions/deckCards'
import DeckCard from './DeckCard'

const DeckCards = (props) =>
    <div>
        {
            props.deckCards.map(card => <DeckCard card={ card } />)
        }
    </div>

const mapStateToProps = ({ deckCards }) => ({ deckCards })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ decrement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCards)
