import { coilsUiOverrides } from "./coils/coils-ui-overrides";
import { booleanUiOverrides } from "./boolean";
import { TLUiOverrides } from "tldraw";
import { dampersUiOverrides } from "./dampers";

export const uiOverrides: TLUiOverrides = {
  ...coilsUiOverrides,
  ...booleanUiOverrides,
  ...dampersUiOverrides
};


