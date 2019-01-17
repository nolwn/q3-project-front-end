import React, { Component } from 'react';
import DeckListing from './DeckListing.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDecks} from '../actions/decks';

class ListofDecks extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getDecks(this.props.match.params.user_id, () => this.props.history.push('/login'));
    }

    render() {
        const decks = this.props.decks;
        const user = this.props.decks[0] || "test";
        return(
            <div className="container">
            <h2>{user.user_name}'s Decks</h2> <span>Click Deck Name to Edit</span>
                {decks.map(deck => {return <DeckListing key= {deck.id} {...deck}/>})}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getDecks},dispatch)
}

const mapStateToProps = (state) => {
    return {
        decks: state.decks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListofDecks)