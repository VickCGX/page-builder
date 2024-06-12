import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilvTrue.gif"
  
  // [1]
  type IheatingCoilvTrue = TLBaseShape<
    "heatingCoilvTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilvTrueUtil extends BaseBoxShapeUtil<IheatingCoilvTrue> {
    // [2]
    static override type = "heatingCoilvTrue" as const;
    static override props: ShapeProps<IheatingCoilvTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilvTrue) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilvTrue["props"] {
      return {
        w: 50,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IheatingCoilvTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilvTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilvTrueTool extends BaseBoxShapeTool {
  static override id = "heatingCoilvTrue";
  static override initial = "idle";
  override shapeType = "heatingCoilvTrue";
}
