import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { decrement } from '../actions/deckCards'

const handleDecrement = () => {
    decrement(1, 1, 1)
}

const QtyButtons = (props) =>
    props.qty > 1 ?
        <span className='qtyButtons'>
            <button onClick = { e => props.decrement(1, 1, 1) }>-</button>
            <button>+</button>
        </span> :
        <button className='qtyButtons'>remove</button>

// const mapStateToProps = ({ cards }) => ({ cards })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ decrement }, dispatch)

export default connect(null, mapDispatchToProps)(QtyButtons)
