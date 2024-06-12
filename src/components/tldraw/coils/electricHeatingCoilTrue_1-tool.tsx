import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue_1.png"
  
  // [1]
  type IelectricHeatingCoilTrue_1 = TLBaseShape<
    "electricHeatingCoilTrue_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrue_1Util extends BaseBoxShapeUtil<IelectricHeatingCoilTrue_1> {
    // [2]
    static override type = "electricHeatingCoilTrue_1" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue_1) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue_1["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrue_1Tool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue_1";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue_1";
}
