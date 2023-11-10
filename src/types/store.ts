export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
}

export enum Actions {
  "CHANGE_SELECTED" = "CHANGE_SELECTED",
  "UPLOAD_MINES" = "UPLOAD_MINES",
  "ADD_OPENED" = "ADD_OPENED",
  "RESET_GAME" = "RESET_GAME",
  "LOST_GAME" = "LOST_GAME"
}

export interface AppState {
  started: boolean
  selected: string
  mines: string
  opened: number[]
  lost: boolean
}
