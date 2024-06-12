import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/filterH_2.png"
  
  // [1]
  type IfilterH_2 = TLBaseShape<
    "filterH_2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class filterH_2Util extends BaseBoxShapeUtil<IfilterH_2> {
    // [2]
    static override type = "filterH_2" as const;
    static override props: ShapeProps<IfilterH_2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IfilterH_2) => true;
  
    // [4]
    getDefaultProps(): IfilterH_2["props"] {
      return {
        w: 107,
        h: 39,
      };
    }
  
    // [7]
    component(shape: IfilterH_2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IfilterH_2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class filterH_2Tool extends BaseBoxShapeTool {
  static override id = "filterH_2";
  static override initial = "idle";
  override shapeType = "filterH_2";
}
