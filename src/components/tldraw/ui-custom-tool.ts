import { booleanShapes, booleanTools } from "./boolean";
import { coilsShapes, coilsTools } from "./coils";
import { dampersShapes, dampersTools } from "./dampers";

export const customShapes = [...booleanShapes, ...coilsShapes, ...dampersShapes];
export const customTools = [...booleanTools, ...coilsTools, ...dampersTools];
