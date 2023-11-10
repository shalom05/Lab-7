import { state } from ".";
import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.CHANGE_SELECTED:
      if (state.started === false) {
        return {
          ...currentState,
          selected: action.payload,
          started: true
        };
      } else {
        return {
          ...currentState,
          selected: action.payload
        };
      }
    case Actions.UPLOAD_MINES:
      return {
        ...currentState,
        mines: action.payload
      };
    case Actions.LOST_GAME:
      return {
        ...currentState,
        lost: JSON.parse(action.payload)
      };
    case Actions.ADD_OPENED:
      const newOpened = currentState.opened
      newOpened.push(parseInt(action.payload))
      return {
        ...currentState,
        opened: newOpened
      };
    case Actions.RESET_GAME:
      return JSON.parse(action.payload)
    default:
      return currentState;
  }
};
