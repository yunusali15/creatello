import { CONSTANTS } from "."

export const addList = (title, boardID) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload : { title, boardID },
    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type,
    boardID
) => {
    return {
        type: CONSTANTS.DRAG,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
            boardID
        }
    }
}