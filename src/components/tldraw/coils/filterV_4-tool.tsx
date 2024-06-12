import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterV_4.png"
  
  // [1]
  type IfilterV_4 = TLBaseShape<
    "filterV_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterV_4Util extends BaseBoxShapeUtil<IfilterV_4> {
    // [2]
    static override type = "filterV_4" as const;
    static override props: ShapeProps<IfilterV_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterV_4) => true;
  
    // [4]
    getDefaultProps(): IfilterV_4["props"] {
      return {
        w: 45,
        h: 98,
      };
    }
  
    // [7]
    component(shape: IfilterV_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterV_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterV_4Tool extends BaseBoxShapeTool {
  static override id = "filterV_4";
  static override initial = "idle";
  override shapeType = "filterV_4";
}
