import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoilTrue_2.png"
  
  // [1]
  type IelectricHeatingCoilTrue_2 = TLBaseShape<
    "electricHeatingCoilTrue_2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoilTrue_2Util extends BaseBoxShapeUtil<IelectricHeatingCoilTrue_2> {
    // [2]
    static override type = "electricHeatingCoilTrue_2" as const;
    static override props: ShapeProps<IelectricHeatingCoilTrue_2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoilTrue_2) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoilTrue_2["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoilTrue_2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoilTrue_2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoilTrue_2Tool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoilTrue_2";
  static override initial = "idle";
  override shapeType = "electricHeatingCoilTrue_2";
}
