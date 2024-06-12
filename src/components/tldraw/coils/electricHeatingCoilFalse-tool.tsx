import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilFalse.png"
  
  // [1]
  type IelectricHeatingCoilFalse = TLBaseShape<
    "electricHeatingCoilFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilFalseUtil extends BaseBoxShapeUtil<IelectricHeatingCoilFalse> {
    // [2]
    static override type = "electricHeatingCoilFalse" as const;
    static override props: ShapeProps<IelectricHeatingCoilFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilFalse) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilFalse["props"] {
      return {
        w: 50,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilFalseTool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilFalse";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilFalse";
}
