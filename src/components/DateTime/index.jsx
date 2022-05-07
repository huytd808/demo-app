import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { today } from '../../data';
import Workout from '../Workout';
import './DateTime.css';

const DateTime = ({ columnId, item }) => {
    const day = React.useMemo(
        () => (item.day < 10 ? `0${item.day}` : item.day),
        [item.day]
    );
    const activeClass = item.day === today.day ? 'DateTime-active' : '';

    return (
        <div>
            <span className="DateTime-name">{item.name}</span>
            <div className="DateTime-container">
                <p className={`DateTime-day ${activeClass}`}>{day}</p>
                <Droppable
                    droppableId={columnId}
                    type="WORKOUTS"
                    key={columnId}
                >
                    {(provided) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {item.workouts.map((workout, index) => {
                                    return (
                                        <Draggable
                                            key={workout.id}
                                            draggableId={workout.id}
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
                                                            marginBottom: '5px',
                                                            ...provided
                                                                .draggableProps
                                                                .style
                                                        }}
                                                    >
                                                        <Workout
                                                            key={workout.id}
                                                            columnId={columnId}
                                                            item={workout}
                                                        />
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
};

export default React.memo(DateTime);
