import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/bulbSmallFalse.png"
  
  // [1]
  type IbulbSmallFalse = TLBaseShape<
    "bulbSmallFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class bulbSmallFalseUtil extends BaseBoxShapeUtil<IbulbSmallFalse> {
    // [2]
    static override type = "bulbSmallFalse" as const;
    static override props: ShapeProps<IbulbSmallFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IbulbSmallFalse) => true;
  
    // [4]
    getDefaultProps(): IbulbSmallFalse["props"] {
      return {
        w: 19,
        h: 20,
      };
    }
  
    // [7]
    component(shape: IbulbSmallFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IbulbSmallFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class bulbSmallFalseTool extends BaseBoxShapeTool {
  static override id = "bulbSmallFalse";
  static override initial = "idle";
  override shapeType = "bulbSmallFalse";
}
