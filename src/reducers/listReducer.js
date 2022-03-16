import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 6;

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
        id: 1,
        title: "PROGRESS",
        cards: [
            {
                id: 2,
                text: "Watching all the pending lectures",
            },
            {
                id: 3,
                text: "Watching all the pending lectures",
            },
        ]
    },
    {
        id: 2,
        title: "DONE",
        cards: [
            {
                id: 4,
                text: "Watched all the pending lectures",
            },
            {
                id: 5,
                text: "Watched all the pending lectures",
            },
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID += 1;
            const newState = state.map(list => {
                if (action.payload.listID === list.id) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard],
                    }
                } else {
                    return list;
                }
            })
            return newState;
        default:
            return state;
    }
};

export default listReducer;