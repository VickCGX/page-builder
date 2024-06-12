import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv_3.png"
  
  // [1]
  type IcoolingCoilv_3 = TLBaseShape<
    "coolingCoilv_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv_3Util extends BaseBoxShapeUtil<IcoolingCoilv_3> {
    // [2]
    static override type = "coolingCoilv_3" as const;
    static override props: ShapeProps<IcoolingCoilv_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv_3) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv_3["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv_3Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv_3";
  static override initial = "idle";
  override shapeType = "coolingCoilv_3";
}
