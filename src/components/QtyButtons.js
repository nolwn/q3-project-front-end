import React from 'react'
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { decrement, increment } from '../actions/deckCards'

const QtyButtons = (props) =>
    props.qty > 1 ?
        <span className='qtyButtons'>
            <button onClick = { () => props.decrement(props.match.params.user_id, props.match.params.deck_id, props.id) }>-</button>
            <button onClick={ () => props.increment(props.match.params.user_id, props.match.params.deck_id, props.id)}>+</button>
        </span> :
        <button className='qtyButtons'>remove</button>

// const mapStateToProps = ({ cards }) => ({ cards })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ decrement, increment }, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(QtyButtons))
