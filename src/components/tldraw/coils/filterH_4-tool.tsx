import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterH_4.png"
  
  // [1]
  type IfilterH_4 = TLBaseShape<
    "filterH_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterH_4Util extends BaseBoxShapeUtil<IfilterH_4> {
    // [2]
    static override type = "filterH_4" as const;
    static override props: ShapeProps<IfilterH_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterH_4) => true;
  
    // [4]
    getDefaultProps(): IfilterH_4["props"] {
      return {
        w: 107,
        h: 39,
      };
    }
  
    // [7]
    component(shape: IfilterH_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterH_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterH_4Tool extends BaseBoxShapeTool {
  static override id = "filterH_4";
  static override initial = "idle";
  override shapeType = "filterH_4";
}
