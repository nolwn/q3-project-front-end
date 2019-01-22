import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {deleteDeck, addWin, addLoss} from '../actions/decks';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function DeckListing({id, deck_name, win_count, loss_count, user_id, deleteDeck, addWin, addLoss, match}) {
    return (
        <div style={{marginBottom: 5}} className="collection-item">
        <div className="row border text-white bg-dark">
            <div className="col-md-3 align-self-center"><h5>Title:</h5></div>
            <div className="col-md-2 align-self-center"><h5>Wins:</h5></div>
            <div className="col-md-2 align-self-center"><h5>Losses:</h5></div>
            {/* eslint-disable-next-line */}
            <div className="col-md-2 align-self-center"> <a className="text-white" onClick={() => deleteDeck(id,user_id)} href='#'><b>DELETE DECK</b></a></div>

        </div>
        <div className="row border bg-light justify-content-start">
            <div className="col-md-3 align-self-center"><Link to={`${match.url}/${id}`} >{deck_name}</Link> </div>
            <div className="col-md-1 align-self-center"><h5>{win_count} </h5></div>
            <div className="col-md-1"><button className="btn btn-sm btn-outline-primary" onClick={ () => addWin(id, user_id, deck_name, win_count, loss_count) }>+</button></div>
            <div className="col-md-1 align-self-center"><h5>{loss_count} </h5></div>
            <div className="col-md-1"><button className="btn btn-sm btn-outline-danger" onClick={ () => addLoss(id, user_id, deck_name, win_count, loss_count) }>+</button></div>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return bindActionCreators({deleteDeck, addWin, addLoss},dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(DeckListing))
