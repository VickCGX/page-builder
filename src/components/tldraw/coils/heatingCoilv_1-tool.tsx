import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv_1.png"
  
  // [1]
  type IheatingCoilv_1 = TLBaseShape<
    "heatingCoilv_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv_1Util extends BaseBoxShapeUtil<IheatingCoilv_1> {
    // [2]
    static override type = "heatingCoilv_1" as const;
    static override props: ShapeProps<IheatingCoilv_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv_1) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv_1["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv_1Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv_1";
  static override initial = "idle";
  override shapeType = "heatingCoilv_1";
}
