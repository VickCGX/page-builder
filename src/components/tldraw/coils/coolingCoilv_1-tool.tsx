import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv_1.png"
  
  // [1]
  type IcoolingCoilv_1 = TLBaseShape<
    "coolingCoilv_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv_1Util extends BaseBoxShapeUtil<IcoolingCoilv_1> {
    // [2]
    static override type = "coolingCoilv_1" as const;
    static override props: ShapeProps<IcoolingCoilv_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv_1) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv_1["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv_1Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv_1";
  static override initial = "idle";
  override shapeType = "coolingCoilv_1";
}
