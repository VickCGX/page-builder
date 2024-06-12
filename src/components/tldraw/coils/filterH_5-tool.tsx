import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterH_5.png"
  
  // [1]
  type IfilterH_5 = TLBaseShape<
    "filterH_5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterH_5Util extends BaseBoxShapeUtil<IfilterH_5> {
    // [2]
    static override type = "filterH_5" as const;
    static override props: ShapeProps<IfilterH_5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterH_5) => true;
  
    // [4]
    getDefaultProps(): IfilterH_5["props"] {
      return {
        w: 107,
        h: 39,
      };
    }
  
    // [7]
    component(shape: IfilterH_5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterH_5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterH_5Tool extends BaseBoxShapeTool {
  static override id = "filterH_5";
  static override initial = "idle";
  override shapeType = "filterH_5";
}
