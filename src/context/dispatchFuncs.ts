import { ActionType } from "./reducer";
import { useDrawingDispatch } from "./store";

export class DispatchFunctions {
    readonly _dispatch: any
    constructor(){
        this._dispatch = useDrawingDispatch();
    }

    updateBgColor = (bgColor: string) => {
        this._dispatch({
            type: ActionType.UpdateBgColor,
            bgColor
        });
    }
}