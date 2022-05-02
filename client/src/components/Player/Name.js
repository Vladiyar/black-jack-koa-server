import React from 'react';

const Name = (props) => {
    return (
        <div className="player-name">
            Player {props.nameData}
        </div>
    );
};

export default Name;