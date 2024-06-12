import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv_4.png"
  
  // [1]
  type IheatingCoilv_4 = TLBaseShape<
    "heatingCoilv_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv_4Util extends BaseBoxShapeUtil<IheatingCoilv_4> {
    // [2]
    static override type = "heatingCoilv_4" as const;
    static override props: ShapeProps<IheatingCoilv_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv_4) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv_4["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv_4Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv_4";
  static override initial = "idle";
  override shapeType = "heatingCoilv_4";
}
