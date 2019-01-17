import React from 'react';
import {deleteDeck} from '../actions/decks';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function DeckListing({id, deck_name, win_count, loss_count, user_id, deleteDeck}) {
    return (
        <div style={{marginBottom: 5}} className="collection-item">
        <div className="row border text-white bg-dark">
            <div className="col-md-4 align-self-center"><h5>Title:</h5></div>
            <div className="col-md-3 align-self-center"><h5>Wins:</h5></div>
            <div className="col-md-3 align-self-center"><h5>Losses:</h5></div>
            <div className="col-md-2 align-self-center"> <a className="text-white" onClick={() => deleteDeck(id,user_id)} href='#'><b>DELETE DECK</b></a></div>
           
        </div>
        <div className="row border bg-light">
            <div className="col-md-4 align-self-center"><h5>{deck_name}</h5></div>
            <div className="col-md-3 align-self-center"><h5>{win_count} </h5></div>
            <div className="col-md-3 align-self-center"><h5>{loss_count} </h5></div>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteDeck},dispatch)
}

export default connect(null, mapDispatchToProps)(DeckListing)