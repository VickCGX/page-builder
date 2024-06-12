import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue_3.png"
  
  // [1]
  type IelectricHeatingCoilTrue_3 = TLBaseShape<
    "electricHeatingCoilTrue_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrue_3Util extends BaseBoxShapeUtil<IelectricHeatingCoilTrue_3> {
    // [2]
    static override type = "electricHeatingCoilTrue_3" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue_3) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue_3["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrue_3Tool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue_3";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue_3";
}
