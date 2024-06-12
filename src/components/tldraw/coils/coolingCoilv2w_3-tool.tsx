import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv2w_3.png"
  
  // [1]
  type IcoolingCoilv2w_3 = TLBaseShape<
    "coolingCoilv2w_3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv2w_3Util extends BaseBoxShapeUtil<IcoolingCoilv2w_3> {
    // [2]
    static override type = "coolingCoilv2w_3" as const;
    static override props: ShapeProps<IcoolingCoilv2w_3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv2w_3) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv2w_3["props"] {
      return {
        w: 61,
        h: 102,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv2w_3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv2w_3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv2w_3Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv2w_3";
  static override initial = "idle";
  override shapeType = "coolingCoilv2w_3";
}
