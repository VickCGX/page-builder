import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv2w_4.png"
  
  // [1]
  type IheatingCoilv2w_4 = TLBaseShape<
    "heatingCoilv2w_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv2w_4Util extends BaseBoxShapeUtil<IheatingCoilv2w_4> {
    // [2]
    static override type = "heatingCoilv2w_4" as const;
    static override props: ShapeProps<IheatingCoilv2w_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv2w_4) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv2w_4["props"] {
      return {
        w: 61,
        h: 102,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv2w_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv2w_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv2w_4Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv2w_4";
  static override initial = "idle";
  override shapeType = "heatingCoilv2w_4";
}
