import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv_4.png"
  
  // [1]
  type IcoolingCoilv_4 = TLBaseShape<
    "coolingCoilv_4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv_4Util extends BaseBoxShapeUtil<IcoolingCoilv_4> {
    // [2]
    static override type = "coolingCoilv_4" as const;
    static override props: ShapeProps<IcoolingCoilv_4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv_4) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv_4["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv_4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv_4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv_4Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv_4";
  static override initial = "idle";
  override shapeType = "coolingCoilv_4";
}
