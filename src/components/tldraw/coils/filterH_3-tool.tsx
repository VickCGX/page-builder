import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterH_3.png"
  
  // [1]
  type IfilterH_3 = TLBaseShape<
    "filterH_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterH_3Util extends BaseBoxShapeUtil<IfilterH_3> {
    // [2]
    static override type = "filterH_3" as const;
    static override props: ShapeProps<IfilterH_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterH_3) => true;
  
    // [4]
    getDefaultProps(): IfilterH_3["props"] {
      return {
        w: 107,
        h: 39,
      };
    }
  
    // [7]
    component(shape: IfilterH_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterH_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterH_3Tool extends BaseBoxShapeTool {
  static override id = "filterH_3";
  static override initial = "idle";
  override shapeType = "filterH_3";
}
