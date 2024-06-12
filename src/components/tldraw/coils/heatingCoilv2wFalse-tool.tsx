import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv2wFalse.png"
  
  // [1]
  type IheatingCoilv2wFalse = TLBaseShape<
    "heatingCoilv2wFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv2wFalseUtil extends BaseBoxShapeUtil<IheatingCoilv2wFalse> {
    // [2]
    static override type = "heatingCoilv2wFalse" as const;
    static override props: ShapeProps<IheatingCoilv2wFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv2wFalse) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv2wFalse["props"] {
      return {
        w: 62,
        h: 102,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv2wFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv2wFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv2wFalseTool extends BaseBoxShapeTool {
  static override id = "heatingCoilv2wFalse";
  static override initial = "idle";
  override shapeType = "heatingCoilv2wFalse";
}
