import { CONSTANTS } from ".";

export const addBoard = (title) => {
    return {
        type: CONSTANTS.ADD_BOARD,
        payload : title
    }
}
