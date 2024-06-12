import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv_5.png"
  
  // [1]
  type IheatingCoilv_5 = TLBaseShape<
    "heatingCoilv_5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv_5Util extends BaseBoxShapeUtil<IheatingCoilv_5> {
    // [2]
    static override type = "heatingCoilv_5" as const;
    static override props: ShapeProps<IheatingCoilv_5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv_5) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv_5["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv_5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv_5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv_5Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv_5";
  static override initial = "idle";
  override shapeType = "heatingCoilv_5";
}
