import React, { ReactNode, useReducer } from "react";
import { IDrawingState } from "./DrawingState";
import { drawingReducer } from "./reducer";
import { DrawingContext, DrawingDispatchContext } from "./store";

interface DrawingsProviderProps {
  children: ReactNode;
  initialState: IDrawingState;
}

export const DrawingProvider: React.FunctionComponent<DrawingsProviderProps> = ({
  children,
  initialState,
}: DrawingsProviderProps) => {
  const [drawingContext, dispatch] = useReducer(drawingReducer, initialState);

  return (
    <DrawingContext.Provider value={drawingContext}>
      <DrawingDispatchContext.Provider value={dispatch}>{children}</DrawingDispatchContext.Provider>
    </DrawingContext.Provider>
  );
};
