import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/occupiedTrue.png"
  
  // [1]
  type IoccupiedTrue = TLBaseShape<
    "occupiedTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class occupiedTrueUtil extends BaseBoxShapeUtil<IoccupiedTrue> {
    // [2]
    static override type = "occupiedTrue" as const;
    static override props: ShapeProps<IoccupiedTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IoccupiedTrue) => true;
  
    // [4]
    getDefaultProps(): IoccupiedTrue["props"] {
      return {
        w: 25,
        h: 27,
      };
    }
  
    // [7]
    component(shape: IoccupiedTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IoccupiedTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class occupiedTrueTool extends BaseBoxShapeTool {
  static override id = "occupiedTrue";
  static override initial = "idle";
  override shapeType = "occupiedTrue";
}
