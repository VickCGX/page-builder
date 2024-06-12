import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/occupiedSmallFalse.png"
  
  // [1]
  type IoccupiedSmallFalse = TLBaseShape<
    "occupiedSmallFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class occupiedSmallFalseUtil extends BaseBoxShapeUtil<IoccupiedSmallFalse> {
    // [2]
    static override type = "occupiedSmallFalse" as const;
    static override props: ShapeProps<IoccupiedSmallFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IoccupiedSmallFalse) => true;
  
    // [4]
    getDefaultProps(): IoccupiedSmallFalse["props"] {
      return {
        w: 14,
        h: 23,
      };
    }
  
    // [7]
    component(shape: IoccupiedSmallFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IoccupiedSmallFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class occupiedSmallFalseTool extends BaseBoxShapeTool {
  static override id = "occupiedSmallFalse";
  static override initial = "idle";
  override shapeType = "occupiedSmallFalse";
}
