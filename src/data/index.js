export const workouts = [
    {
        id: 'workout-1',
        name: 'Chest Day - with Arm exercises',
        exercises: [
            {
                id: 'exercise-1',
                name: 'Bench Press Medium Grip',
                info: '50lb x 5, 60lb x 5, 70lb x 5',
                sets: '3x'
            },
            {
                id: 'exercise-2',
                name: 'Exercise B',
                info: '40lb x 10',
                sets: '1x'
            }
        ]
    },
    {
        id: 'workout-2',
        name: 'Arm Day',
        exercises: [
            {
                id: 'exercise-3',
                name: 'Exercise C',
                info: '60lb x 6',
                sets: '1x'
            }
        ]
    }
];

export const otherWorkouts = [
    {
        id: 'workout-3',
        name: 'Leg Day',
        exercises: [
            {
                id: 'exercise-4',
                name: 'Exercise D',
                info: '30lb x 1',
                sets: '1x'
            },
            {
                id: 'exercise-5',
                name: 'Exercise E',
                info: '40lb x 5',
                sets: '1x'
            },
            {
                id: 'exercise-6',
                name: 'Exercise F',
                info: '50lb x 5',
                sets: '1x'
            }
        ]
    }
];

export const daysOfWeek = {
    Mon: {
        name: 'Mon',
        day: 2,
        workouts
    },
    Tue: {
        name: 'Tue',
        day: 3,
        workouts: []
    },
    Wed: {
        name: 'Wed',
        day: 4,
        workouts: otherWorkouts
    },
    Thu: {
        name: 'Thu',
        day: 5,
        workouts: []
    },
    Fri: {
        name: 'Fri',
        day: 6,
        workouts: []
    },
    Sat: {
        name: 'Sat',
        day: 7,
        workouts: []
    },
    Sun: {
        name: 'Sun',
        day: 8,
        workouts: []
    }
};

export const today = {
    name: 'Thu',
    day: 5
};
