import React from 'react';
import './Exercise.css';

const Exercise = ({ exercise }) => {
    return (
        <div className="Exercise-container">
            <div className="Exercise-name">{exercise.name}</div>
            <div className="Exercise-wrapper">
                <p className="Exercise-sets">{exercise.sets}</p>
                <div className="Exercise-info">{exercise.info}</div>
            </div>
        </div>
    );
};

export default React.memo(Exercise);
