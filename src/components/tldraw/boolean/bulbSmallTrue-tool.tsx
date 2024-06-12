import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/boolean/bulbSmallTrue.png"
  
  // [1]
  type IbulbSmallTrue = TLBaseShape<
    "bulbSmallTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class bulbSmallTrueUtil extends BaseBoxShapeUtil<IbulbSmallTrue> {
    // [2]
    static override type = "bulbSmallTrue" as const;
    static override props: ShapeProps<IbulbSmallTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IbulbSmallTrue) => true;
  
    // [4]
    getDefaultProps(): IbulbSmallTrue["props"] {
      return {
        w: 19,
        h: 20,
      };
    }
  
    // [7]
    component(shape: IbulbSmallTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IbulbSmallTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class bulbSmallTrueTool extends BaseBoxShapeTool {
  static override id = "bulbSmallTrue";
  static override initial = "idle";
  override shapeType = "bulbSmallTrue";
}
