const initialState = [
    {
        id: 0,
        title: "TO-DO",
        cards: [
            {
                id: 0,
                text: "Watch all the pending lectures",
            },
            {
                id: 1,
                text: "Watch all the pending lectures",
            },
        ]
    },
    {
        id: 0,
        title: "PROGRESS",
        cards: [
            {
                id: 0,
                text: "Watching all the pending lectures",
            },
            {
                id: 1,
                text: "Watching all the pending lectures",
            },
        ]
    },
    {
        id: 0,
        title: "DONE",
        cards: [
            {
                id: 0,
                text: "Watched all the pending lectures",
            },
            {
                id: 1,
                text: "Watched all the pending lectures",
            },
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listReducer;