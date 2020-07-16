import React from 'react';

const Lottery = props => {
    return (
        <div className="lottery-numbers">
            <p>{props.number}</p>
        </div>
    );
};

export default Lottery;