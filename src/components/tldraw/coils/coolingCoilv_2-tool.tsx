import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv_2.png"
  
  // [1]
  type IcoolingCoilv_2 = TLBaseShape<
    "coolingCoilv_2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv_2Util extends BaseBoxShapeUtil<IcoolingCoilv_2> {
    // [2]
    static override type = "coolingCoilv_2" as const;
    static override props: ShapeProps<IcoolingCoilv_2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv_2) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv_2["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv_2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv_2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv_2Tool extends BaseBoxShapeTool {
  static override id = "coolingCoilv_2";
  static override initial = "idle";
  override shapeType = "coolingCoilv_2";
}
