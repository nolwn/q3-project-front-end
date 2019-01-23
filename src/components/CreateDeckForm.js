import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createDeck} from '../actions/decks'

class CreateDeckForm extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    handleCreateDeck = (event) => {
        event.preventDefault();
        this.props.createDeck(event.target.deckName.value,
             event.target.deckWins.value,
             event.target.deckLosses.value,
             this.props.match.params.user_id
             );

        event.target.deckName.value = '';
        event.target.deckWins.value = 0;
        event.target.deckLosses.value = 0;

        this.props.hideForm();
    }; 


    render() {
        return (
            <div className ="row border justify-content-center align-items-center">
                <div className="col">
                    <form onSubmit={this.handleCreateDeck}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="deckName">Deck Name</label>
                                <input type="text" className="form-control form-control-sm" name="deckName" id="deckName" placeholder="Name Your Deck"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="deckName">Current Wins</label>
                                <input type="number" className="form-control form-control-sm" name="deckWins" id="deckWins" defaultValue="0" placeholder="Enter Wins"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="deckName">Current Losses</label>
                                <input type="number" className="form-control form-control-sm" name="deckLosses" id="deckLosses" defaultValue="0" placeholder="Enter Losses"/>
                            </div>
                            <div className="form-group col-md-2 align-self-end">
                                <button type="submit" className="btn btn-primary">Create Deck</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    decks: state.decks
  })
  
  const mapDispatchToProps = dispatch => 
    bindActionCreators({
    createDeck
    }, dispatch)
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDeckForm))