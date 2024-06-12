import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterH_1.png"
  
  // [1]
  type IfilterH_1 = TLBaseShape<
    "filterH_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterH_1Util extends BaseBoxShapeUtil<IfilterH_1> {
    // [2]
    static override type = "filterH_1" as const;
    static override props: ShapeProps<IfilterH_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterH_1) => true;
  
    // [4]
    getDefaultProps(): IfilterH_1["props"] {
      return {
        w: 107,
        h: 39,
      };
    }
  
    // [7]
    component(shape: IfilterH_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterH_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterH_1Tool extends BaseBoxShapeTool {
  static override id = "filterH_1";
  static override initial = "idle";
  override shapeType = "filterH_1";
}
