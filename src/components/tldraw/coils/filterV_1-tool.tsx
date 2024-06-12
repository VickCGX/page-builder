import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterV_1.png"
  
  // [1]
  type IfilterV_1 = TLBaseShape<
    "filterV_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterV_1Util extends BaseBoxShapeUtil<IfilterV_1> {
    // [2]
    static override type = "filterV_1" as const;
    static override props: ShapeProps<IfilterV_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterV_1) => true;
  
    // [4]
    getDefaultProps(): IfilterV_1["props"] {
      return {
        w: 45,
        h: 98,
      };
    }
  
    // [7]
    component(shape: IfilterV_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterV_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterV_1Tool extends BaseBoxShapeTool {
  static override id = "filterV_1";
  static override initial = "idle";
  override shapeType = "filterV_1";
}
