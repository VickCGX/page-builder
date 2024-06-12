import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv_3.png"
  
  // [1]
  type IheatingCoilv_3 = TLBaseShape<
    "heatingCoilv_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv_3Util extends BaseBoxShapeUtil<IheatingCoilv_3> {
    // [2]
    static override type = "heatingCoilv_3" as const;
    static override props: ShapeProps<IheatingCoilv_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv_3) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv_3["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv_3Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv_3";
  static override initial = "idle";
  override shapeType = "heatingCoilv_3";
}
