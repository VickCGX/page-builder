import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue.gif"
  
  // [1]
  type IelectricHeatingCoilTrue = TLBaseShape<
    "electricHeatingCoilTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrueUtil extends BaseBoxShapeUtil<IelectricHeatingCoilTrue> {
    // [2]
    static override type = "electricHeatingCoilTrue" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue["props"] {
      return {
        w: 50,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrueTool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue";
}
