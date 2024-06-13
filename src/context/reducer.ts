import { IDrawingState } from "./DrawingState";

export enum ActionType {
  UpdateBgColor = "UpdateBgColor",
}

export function drawingReducer(drawingState: IDrawingState, action: any) {
  switch (action.type) {
    case ActionType.UpdateBgColor: {
      return {
        ...drawingState,
        bgColor: action.bgColor,
      } as IDrawingState;
    }

    default: {
      return drawingState;
    }
  }
}
