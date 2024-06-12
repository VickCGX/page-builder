import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv2wTrue.gif"
  
  // [1]
  type IcoolingCoilv2wTrue = TLBaseShape<
    "coolingCoilv2wTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv2wTrueUtil extends BaseBoxShapeUtil<IcoolingCoilv2wTrue> {
    // [2]
    static override type = "coolingCoilv2wTrue" as const;
    static override props: ShapeProps<IcoolingCoilv2wTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv2wTrue) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv2wTrue["props"] {
      return {
        w: 62,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv2wTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv2wTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv2wTrueTool extends BaseBoxShapeTool {
  static override id = "coolingCoilv2wTrue";
  static override initial = "idle";
  override shapeType = "coolingCoilv2wTrue";
}
