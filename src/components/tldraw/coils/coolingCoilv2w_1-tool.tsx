import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv2w_1.png"
  
  // [1]
  type IcoolingCoilv2w_1 = TLBaseShape<
    "coolingCoilv2w_1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv2w_1Util extends BaseBoxShapeUtil<IcoolingCoilv2w_1> {
    // [2]
    static override type = "coolingCoilv2w_1" as const;
    static override props: ShapeProps<IcoolingCoilv2w_1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv2w_1) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv2w_1["props"] {
      return {
        w: 61,
        h: 102,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv2w_1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv2w_1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv2w_1Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv2w_1";
  static override initial = "idle";
  override shapeType = "coolingCoilv2w_1";
}
