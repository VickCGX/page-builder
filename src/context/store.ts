import { createContext, useContext } from 'react';
import { IDrawingState } from './DrawingState';

export const DrawingContext = createContext<IDrawingState | null>(null);

export const DrawingDispatchContext = createContext<any>(null);

export function useDrawingContext() {
  return useContext(DrawingContext);
}

export function useDrawingDispatch() {
  return useContext(DrawingDispatchContext);
}