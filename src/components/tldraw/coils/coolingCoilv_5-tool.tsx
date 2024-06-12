import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv_5.png"
  
  // [1]
  type IcoolingCoilv_5 = TLBaseShape<
    "coolingCoilv_5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv_5Util extends BaseBoxShapeUtil<IcoolingCoilv_5> {
    // [2]
    static override type = "coolingCoilv_5" as const;
    static override props: ShapeProps<IcoolingCoilv_5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv_5) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv_5["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv_5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv_5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv_5Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv_5";
  static override initial = "idle";
  override shapeType = "coolingCoilv_5";
}
