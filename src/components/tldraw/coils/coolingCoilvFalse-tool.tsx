import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilvFalse.png"
  
  // [1]
  type IcoolingCoilvFalse = TLBaseShape<
    "coolingCoilvFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilvFalseUtil extends BaseBoxShapeUtil<IcoolingCoilvFalse> {
    // [2]
    static override type = "coolingCoilvFalse" as const;
    static override props: ShapeProps<IcoolingCoilvFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilvFalse) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilvFalse["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilvFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilvFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilvFalseTool extends BaseBoxShapeTool {
  static override id = "coolingCoilvFalse";
  static override initial = "idle";
  override shapeType = "coolingCoilvFalse";
}
