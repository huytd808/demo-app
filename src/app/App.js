import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DateTime from '../components/DateTime';
import { daysOfWeek } from '../data';
import { reorder } from '../helper';
import './App.css';

const App = () => {
    const [columns, setColumns] = React.useState(daysOfWeek);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { type, source, destination } = result;

        if (type === 'WORKOUTS') {
            if (source.droppableId !== destination.droppableId) {
                const sourceColumn = columns[source.droppableId];
                const destColumn = columns[destination.droppableId];
                const sourceWorkouts = [...sourceColumn.workouts];
                const destWorkouts = [...destColumn.workouts];
                const [removed] = sourceWorkouts.splice(source.index, 1);
                destWorkouts.splice(destination.index, 0, removed);
                setColumns({
                    ...columns,
                    [source.droppableId]: {
                        ...sourceColumn,
                        workouts: sourceWorkouts
                    },
                    [destination.droppableId]: {
                        ...destColumn,
                        workouts: destWorkouts
                    }
                });
            } else {
                const column = columns[source.droppableId];
                const copiedWorkouts = [...column.workouts];
                setColumns({
                    ...columns,
                    [source.droppableId]: {
                        ...column,
                        workouts: reorder(
                            copiedWorkouts,
                            source.index,
                            destination.index
                        )
                    }
                });
            }
        } else {
            const path = type.split('/');
            const column = columns[path[0]];
            const copiedWorkouts = [...column.workouts];
            const copiedExercises = [
                ...(copiedWorkouts.find((item) => item.id === path[1])
                    ?.exercises || [])
            ];
            const newWorkouts = copiedWorkouts.map((item) => {
                if (item.id === path[1]) {
                    return {
                        ...item,
                        exercises: reorder(
                            copiedExercises,
                            source.index,
                            destination.index
                        )
                    };
                }

                return item;
            });
            setColumns({
                ...columns,
                [path[0]]: {
                    ...column,
                    workouts: newWorkouts
                }
            });
        }
    };

    return (
        <div className="App">
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column]) => (
                    <DateTime
                        key={columnId}
                        columnId={columnId}
                        item={column}
                    />
                ))}
            </DragDropContext>
        </div>
    );
};

export default App;
