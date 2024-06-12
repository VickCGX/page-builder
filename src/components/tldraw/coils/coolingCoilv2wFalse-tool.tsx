import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv2wFalse.png"
  
  // [1]
  type IcoolingCoilv2wFalse = TLBaseShape<
    "coolingCoilv2wFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv2wFalseUtil extends BaseBoxShapeUtil<IcoolingCoilv2wFalse> {
    // [2]
    static override type = "coolingCoilv2wFalse" as const;
    static override props: ShapeProps<IcoolingCoilv2wFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv2wFalse) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv2wFalse["props"] {
      return {
        w: 61,
        h: 102,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv2wFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv2wFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv2wFalseTool extends BaseBoxShapeTool {
  static override id = "coolingCoilv2wFalse";
  static override initial = "idle";
  override shapeType = "coolingCoilv2wFalse";
}
