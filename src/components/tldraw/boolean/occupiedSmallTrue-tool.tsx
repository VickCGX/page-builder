import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/occupiedSmallTrue.png"
  
  // [1]
  type IoccupiedSmallTrue = TLBaseShape<
    "occupiedSmallTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class occupiedSmallTrueUtil extends BaseBoxShapeUtil<IoccupiedSmallTrue> {
    // [2]
    static override type = "occupiedSmallTrue" as const;
    static override props: ShapeProps<IoccupiedSmallTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IoccupiedSmallTrue) => true;
  
    // [4]
    getDefaultProps(): IoccupiedSmallTrue["props"] {
      return {
        w: 14,
        h: 23,
      };
    }
  
    // [7]
    component(shape: IoccupiedSmallTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IoccupiedSmallTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class occupiedSmallTrueTool extends BaseBoxShapeTool {
  static override id = "occupiedSmallTrue";
  static override initial = "idle";
  override shapeType = "occupiedSmallTrue";
}
