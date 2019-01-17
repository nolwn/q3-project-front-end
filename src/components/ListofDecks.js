import React, { Component } from 'react';
import DeckListing from './DeckListing';
import CreateDeckForm from './CreateDeckForm';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDecks} from '../actions/decks';

class ListofDecks extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    noDecks= () => {
        return ( 
            <div className="row border">
                <div className="col-md"><h2>You Currently Have No Decks</h2></div>
            </div>
            );
    }

    componentDidMount() {
        this.props.getDecks(this.props.match.params.user_id, () => this.props.history.push('/login'));
    }

    render() {
        const decks = this.props.decks;
        const user = this.props.decks[0] || "test";
        return(
            <div className="container">
            <h2>{user.user_name}'s Decks</h2>
            <CreateDeckForm/>
                {
                    decks.length === 0 ? this.noDecks() : decks.map(deck => {return <DeckListing key= {deck.id} {...deck}/>})
                    
                    }
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