import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/occupiedFalse.png"
  
  // [1]
  type IoccupiedFalse = TLBaseShape<
    "occupiedFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class occupiedFalseUtil extends BaseBoxShapeUtil<IoccupiedFalse> {
    // [2]
    static override type = "occupiedFalse" as const;
    static override props: ShapeProps<IoccupiedFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IoccupiedFalse) => true;
  
    // [4]
    getDefaultProps(): IoccupiedFalse["props"] {
      return {
        w: 25,
        h: 27,
      };
    }
  
    // [7]
    component(shape: IoccupiedFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IoccupiedFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class occupiedFalseTool extends BaseBoxShapeTool {
  static override id = "occupiedFalse";
  static override initial = "idle";
  override shapeType = "occupiedFalse";
}
