import React from 'react';

export default function DeckListing({id, user_name, deck_name, win_count, loss_count, user_id}) {
    return (
        <div style={{marginBottom: 5}} className="collection-item">
        <div className="row border text-white bg-dark">
            <div className="col-md-6"><h5>Title:</h5></div>
            <div className="col-md-3"><h5>Wins:</h5></div>
            <div className="col-md-3"><h5>Losses:</h5></div>
        </div>
        <div className="row border bg-light">
            <div className="col-md-6"><h5>{deck_name}</h5></div>
            <div className="col-md-3"><h5>{win_count} </h5></div>
            <div className="col-md-3"><h5>{loss_count} </h5></div>
        </div>
    </div>
    )
}