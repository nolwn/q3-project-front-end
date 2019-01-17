import React, { Component } from 'react';
import DeckListing from './DeckListing';
import CreateDeckForm from './CreateDeckForm';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDecks} from '../actions/decks';
import {setAuthentication} from '../actions/authentication'

class ListofDecks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createDeck: false
        }
    };

    userLogOut = () => {
        localStorage.removeItem('token');
        this.props.setAuthentication(null);
        this.props.history.push(`/`)
    }

    noDecks= () => {
        return ( 
            <div className="row border">
                <div className="col-md"><h2>You Currently Have No Decks</h2></div>
            </div>
            );
    }

    componentDidMount() {
        this.props.getDecks(this.props.match.params.user_id, () => this.props.history.push('/'));
    }

    toggleCreateDeckField = () => {
        this.setState({
            createDeck: !this.state.createDeck
        })
    };

    render() {
        const decks = this.props.decks;
        const user = this.props.decks[0] || "test";
        return(
            <div className="container">
                <div style={{marginBottom: 10, marginTop: 10}} className="row justify-content-between">
                    <div className="col-6 align-items-center">
                        <h2>{user.user_name}'s Decks</h2>
                    </div>
                    <div className="col-4 align-items-center">
                        <div className="btn-group btn-group-toggle">
                            <label className="btn btn-success text-white">
                                <button onClick={this.toggleCreateDeckField} className="btn text-white">Create Deck</button>
                            </label>
                            <label class="btn btn-secondary text-white">
                                <button onClick={this.userLogOut} className="btn text-white "> Logout</button>
                            </label>
                        </div>
                    </div>
                </div>
                {
                    this.state.createDeck ? <CreateDeckForm /> : null
                }

                {
                    decks.length === 0 ? this.noDecks() : decks.map(deck => {return <DeckListing key= {deck.id} {...deck}/>})
                    
                    }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getDecks, setAuthentication},dispatch)
}

const mapStateToProps = (state) => {
    return {
        decks: state.decks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListofDecks)