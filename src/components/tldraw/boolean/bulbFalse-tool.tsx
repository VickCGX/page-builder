import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/bulbFalse.png"
  
  // [1]
  type IbulbFalse = TLBaseShape<
    "bulbFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class bulbFalseUtil extends BaseBoxShapeUtil<IbulbFalse> {
    // [2]
    static override type = "bulbFalse" as const;
    static override props: ShapeProps<IbulbFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IbulbFalse) => true;
  
    // [4]
    getDefaultProps(): IbulbFalse["props"] {
      return {
        w: 45,
        h: 44,
      };
    }
  
    // [7]
    component(shape: IbulbFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IbulbFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class bulbFalseTool extends BaseBoxShapeTool {
  static override id = "bulbFalse";
  static override initial = "idle";
  override shapeType = "bulbFalse";
}
