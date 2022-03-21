import { CONSTANTS } from "../actions";

let listID = 6;
let cardID = 12;
let boardID = 2;
const initialState = [
    {
        id: `board-${0}`,
        title: 'Daily planner',
        lists:
            [{
                id: `list-${0}`,
                title: "TO-DO",
                cards: [
                    {
                        id: `card-${0}`,
                        text: "Watch all the pending lectures 0",
                    },
                    {
                        id: `card-${1}`,
                        text: "Watch all the pending lectures 1",
                    },
                ]
            },
            {
                id: `list-${1}`,
                title: "PROGRESS",
                cards: [
                    {
                        id: `card-${2}`,
                        text: "Watching all the pending lectures 2",
                    },
                    {
                        id: `card-${3}`,
                        text: "Watching all the pending lectures 3 ",
                    },
                ]
            },
            {
                id: `list-${2}`,
                title: "DONE",
                cards: [
                    {
                        id: `card-${4}`,
                        text: "Watched all the pending lectures 4",
                    },
                    {
                        id: `card-${5}`,
                        text: "Watched all the pending lectures 5",
                    },
                ]
            }]
    },
    {
        id: `board-${1}`,
        title: 'Daily planner 2',
        lists:
            [{
                id: `list-${3}`,
                title: "TO-DO 2",
                cards: [
                    {
                        id: `card-${6}`,
                        text: "Watch all the pending lectures 6",
                    },
                    {
                        id: `card-${7}`,
                        text: "Watch all the pending lectures 7",
                    },
                ]
            },
            {
                id: `list-${4}`,
                title: "PROGRESS 2",
                cards: [
                    {
                        id: `card-${8}`,
                        text: "Watching all the pending lectures 8",
                    },
                    {
                        id: `card-${9}`,
                        text: "Watching all the pending lectures 9 ",
                    },
                ]
            },
            {
                id: `list-${5}`,
                title: "DONE 2",
                cards: [
                    {
                        id: `card-${10}`,
                        text: "Watched all the pending lectures 10",
                    },
                    {
                        id: `card-${11}`,
                        text: "Watched all the pending lectures 11",
                    },
                ]
            }]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_BOARD: {
            const newBoard = {
                title: action.payload,
                lists: [],
                id: `board-${boardID}`
            }

            boardID += 1;

            return [...state, newBoard];
        }
        case CONSTANTS.ADD_LIST: {
            const newList = {
                title: action.payload.title,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;

            const newState = state.map(board => {
                if (action.payload.boardID === board.id) {
                    return {
                        ...board,
                        lists: [...board.lists, newList]
                    }
                } else {
                    return board;
                }
            })
            return newState;
        }

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: `card-${cardID}`,
                text: action.payload.text,
            }
            cardID += 1;

            let newList = '';
            const newState = state.map(board => {
                if (action.payload.boardID === board.id) {
                    board.lists.map(list => {
                        if (action.payload.listID === list.id) {
                            newList = {
                                ...list,
                                cards: [...list.cards, newCard]
                            };
                            return ;
                        } else {
                            return list;
                        }
                    })
                    return {...board, lists: [...board.lists, newList]};
                } else {
                    return board;
                }
            })

            return newState;
        }

        case CONSTANTS.DRAG: {
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type,
                boardID } = action.payload;

            const newState = [...state];

            if (type === 'lists') {
                const board = newState.find(board => board.id === boardID);
                const list = board.lists.splice(droppableIndexStart, 1);
                board.lists.splice(droppableIndexEnd, 0, ...list);

                return newState;
            }

            if (droppableIdEnd === droppableIdStart) {
                const board = newState.find(board => board.id === boardID);
                const list = board.find(list => list.id === droppableIdStart);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            } else {
                const board = newState.find(board => board.id === boardID);
                const listStart = board.find(list => list.id === droppableIdStart);
                const listEnd = board.find(list => list.id === droppableIdEnd);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        }
        default:
            return state;
    }
};

export default listReducer;