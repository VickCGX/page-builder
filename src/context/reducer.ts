import { IDrawingState } from "./DrawingState";

export enum ActionType {
  UpdateBgColor = "UpdateBgColor",
  SetOpenUpdateCategory = "SetOpenUpdateCategory",
  SetOpenUpdateGroup = "SetOpenUpdateGroup",
  SetOpenUpdateImage = "SetOpenUpdateImage",
  SelectCategory = "SelectCategory",
  SelectGroup = "SelectGroup",
  SelectImage = "SelectImage",
}

export function drawingReducer(drawingState: IDrawingState, action: any) {
  switch (action.type) {
    case ActionType.UpdateBgColor: {
      return {
        ...drawingState,
        bgColor: action.bgColor,
      } as IDrawingState;
    }
    case ActionType.SetOpenUpdateCategory: {
      return {
        ...drawingState,
        openUpdateCategory: action.open,
      } as IDrawingState;
    }
    case ActionType.SetOpenUpdateGroup: {
      return {
        ...drawingState,
        openUpdateGroup: action.open,
      } as IDrawingState;
    }
    case ActionType.SetOpenUpdateImage: {
      return {
        ...drawingState,
        openUpdateImage: action.open,
      } as IDrawingState;
    }
    case ActionType.SelectCategory: {
      return {
        ...drawingState,
        selectedCategory: action.category,
      } as IDrawingState;
    }
    case ActionType.SelectGroup: {
      return {
        ...drawingState,
        selectedGroup: action.group,
      } as IDrawingState;
    }
    case ActionType.SelectImage: {
      return {
        ...drawingState,
        selectedImage: action.image,
      } as IDrawingState;
    }
    default: {
      return drawingState;
    }
  }
}
