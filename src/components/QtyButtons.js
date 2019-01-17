import React from 'react'



const QtyButtons = (props) =>
    <div>
    {
        props.qty > 1 ?
            <button>-</button>
            <button>+</button> :
            <button>remove</button>
    }
    </div>

export default QtyButtons
