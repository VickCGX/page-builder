import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterV_5.png"
  
  // [1]
  type IfilterV_5 = TLBaseShape<
    "filterV_5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterV_5Util extends BaseBoxShapeUtil<IfilterV_5> {
    // [2]
    static override type = "filterV_5" as const;
    static override props: ShapeProps<IfilterV_5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterV_5) => true;
  
    // [4]
    getDefaultProps(): IfilterV_5["props"] {
      return {
        w: 45,
        h: 98,
      };
    }
  
    // [7]
    component(shape: IfilterV_5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterV_5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterV_5Tool extends BaseBoxShapeTool {
  static override id = "filterV_5";
  static override initial = "idle";
  override shapeType = "filterV_5";
}
