import { ICategory, IGroup, IImage } from "@/database/db";
import { ActionType } from "./reducer";
import { useDrawingDispatch } from "./store";

export class DispatchFunctions {
  readonly _dispatch: any;
  constructor() {
    this._dispatch = useDrawingDispatch();
  }

  updateBgColor = (bgColor: string) => {
    this._dispatch({
      type: ActionType.UpdateBgColor,
      bgColor,
    });
  };

  setOpenUpdateCategory = (open: boolean) => {
    this._dispatch({
      type: ActionType.SetOpenUpdateCategory,
      open,
    });
  };

  setOpenUpdateGroup = (open: boolean) => {
    this._dispatch({
      type: ActionType.SetOpenUpdateGroup,
      open,
    });
  };

  setOpenUpdateImage = (open: boolean) => {
    this._dispatch({
      type: ActionType.SetOpenUpdateImage,
      open,
    });
  };

  selectCategory = (category: ICategory) => {
    this._dispatch({
      type: ActionType.SelectCategory,
      category,
    });
  };

  selectGroup = (group: IGroup) => {
    this._dispatch({
      type: ActionType.SelectGroup,
      group,
    });
  };

  selectImage = (image: IImage) => {
    this._dispatch({
      type: ActionType.SelectImage,
      image,
    });
  };
}
