import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv_2.png"
  
  // [1]
  type IheatingCoilv_2 = TLBaseShape<
    "heatingCoilv_2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv_2Util extends BaseBoxShapeUtil<IheatingCoilv_2> {
    // [2]
    static override type = "heatingCoilv_2" as const;
    static override props: ShapeProps<IheatingCoilv_2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv_2) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv_2["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv_2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv_2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv_2Tool extends BaseBoxShapeTool {
  static override id = "heatingCoilv_2";
  static override initial = "idle";
  override shapeType = "heatingCoilv_2";
}
