import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterV_3.png"
  
  // [1]
  type IfilterV_3 = TLBaseShape<
    "filterV_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterV_3Util extends BaseBoxShapeUtil<IfilterV_3> {
    // [2]
    static override type = "filterV_3" as const;
    static override props: ShapeProps<IfilterV_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterV_3) => true;
  
    // [4]
    getDefaultProps(): IfilterV_3["props"] {
      return {
        w: 45,
        h: 98,
      };
    }
  
    // [7]
    component(shape: IfilterV_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterV_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterV_3Tool extends BaseBoxShapeTool {
  static override id = "filterV_3";
  static override initial = "idle";
  override shapeType = "filterV_3";
}
