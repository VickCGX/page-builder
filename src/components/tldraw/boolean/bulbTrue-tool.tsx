import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/bulbTrue.png"
  
  // [1]
  type IbulbTrue = TLBaseShape<
    "bulbTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class bulbTrueUtil extends BaseBoxShapeUtil<IbulbTrue> {
    // [2]
    static override type = "bulbTrue" as const;
    static override props: ShapeProps<IbulbTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IbulbTrue) => true;
  
    // [4]
    getDefaultProps(): IbulbTrue["props"] {
      return {
        w: 45,
        h: 44,
      };
    }
  
    // [7]
    component(shape: IbulbTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IbulbTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class bulbTrueTool extends BaseBoxShapeTool {
  static override id = "bulbTrue";
  static override initial = "idle";
  override shapeType = "bulbTrue";
}
