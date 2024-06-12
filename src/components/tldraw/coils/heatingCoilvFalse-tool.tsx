import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilvFalse.png"
  
  // [1]
  type IheatingCoilvFalse = TLBaseShape<
    "heatingCoilvFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilvFalseUtil extends BaseBoxShapeUtil<IheatingCoilvFalse> {
    // [2]
    static override type = "heatingCoilvFalse" as const;
    static override props: ShapeProps<IheatingCoilvFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilvFalse) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilvFalse["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilvFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilvFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilvFalseTool extends BaseBoxShapeTool {
  static override id = "heatingCoilvFalse";
  static override initial = "idle";
  override shapeType = "heatingCoilvFalse";
}
