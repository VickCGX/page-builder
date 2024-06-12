import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue_4.png"
  
  // [1]
  type IelectricHeatingCoilTrue_4 = TLBaseShape<
    "electricHeatingCoilTrue_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrue_4Util extends BaseBoxShapeUtil<IelectricHeatingCoilTrue_4> {
    // [2]
    static override type = "electricHeatingCoilTrue_4" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue_4) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue_4["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrue_4Tool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue_4";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue_4";
}
