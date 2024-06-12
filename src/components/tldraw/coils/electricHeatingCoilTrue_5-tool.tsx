import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue_5.png"
  
  // [1]
  type IelectricHeatingCoilTrue_5 = TLBaseShape<
    "electricHeatingCoilTrue_5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrue_5Util extends BaseBoxShapeUtil<IelectricHeatingCoilTrue_5> {
    // [2]
    static override type = "electricHeatingCoilTrue_5" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue_5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue_5) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue_5["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue_5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue_5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrue_5Tool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue_5";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue_5";
}
