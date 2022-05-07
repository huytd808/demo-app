import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Exercise from '../Exercise';
import './Workout.css';

const Workout = ({ columnId, item }) => {
    return (
        <Droppable
            droppableId={item.id}
            type={`${columnId}/${item.id}`}
            key={item.id}
        >
            {(provided) => {
                return (
                    <div
                        className="Workout-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <div className="Workout-name-wrapper">
                            <div className="Workout-name">{item.name}</div>
                            <i className="fa-solid fa-ellipsis more-icon" />
                        </div>
                        <div className="Workout-exercise-wrapper">
                            {item.exercises.map((exercise, index) => {
                                return (
                                    <Draggable
                                        key={exercise.id}
                                        draggableId={exercise.id}
                                        index={index}
                                    >
                                        {(provided) => {
                                            return (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        userSelect: 'none',
                                                        padding: '0 5px',
                                                        ...provided
                                                            .draggableProps
                                                            .style
                                                    }}
                                                >
                                                    <Exercise
                                                        key={index}
                                                        exercise={exercise}
                                                    />
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                );
                            })}
                        </div>
                        {provided.placeholder}
                        <div
                            style={{
                                textAlign: 'right',
                                paddingRight: '5px'
                            }}
                        >
                            <i className="fa-solid fa-circle-plus plus-icon" />
                        </div>
                    </div>
                );
            }}
        </Droppable>
    );
};

export default React.memo(Workout);
