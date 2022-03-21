import { CONSTANTS } from "."

export const addCard = (text, listID, boardID) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, listID, boardID}
    }
}