import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv2wTrue.gif"
  
  // [1]
  type IheatingCoilv2wTrue = TLBaseShape<
    "heatingCoilv2wTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv2wTrueUtil extends BaseBoxShapeUtil<IheatingCoilv2wTrue> {
    // [2]
    static override type = "heatingCoilv2wTrue" as const;
    static override props: ShapeProps<IheatingCoilv2wTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv2wTrue) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv2wTrue["props"] {
      return {
        w: 62,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv2wTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv2wTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv2wTrueTool extends BaseBoxShapeTool {
  static override id = "heatingCoilv2wTrue";
  static override initial = "idle";
  override shapeType = "heatingCoilv2wTrue";
}
