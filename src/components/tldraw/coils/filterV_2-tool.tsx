import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterV_2.png"
  
  // [1]
  type IfilterV_2 = TLBaseShape<
    "filterV_2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterV_2Util extends BaseBoxShapeUtil<IfilterV_2> {
    // [2]
    static override type = "filterV_2" as const;
    static override props: ShapeProps<IfilterV_2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterV_2) => true;
  
    // [4]
    getDefaultProps(): IfilterV_2["props"] {
      return {
        w: 45,
        h: 98,
      };
    }
  
    // [7]
    component(shape: IfilterV_2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterV_2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterV_2Tool extends BaseBoxShapeTool {
  static override id = "filterV_2";
  static override initial = "idle";
  override shapeType = "filterV_2";
}
