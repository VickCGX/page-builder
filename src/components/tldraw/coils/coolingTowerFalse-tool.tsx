import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingTowerFalse.png"
  
  // [1]
  type IcoolingTowerFalse = TLBaseShape<
    "coolingTowerFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingTowerFalseUtil extends BaseBoxShapeUtil<IcoolingTowerFalse> {
    // [2]
    static override type = "coolingTowerFalse" as const;
    static override props: ShapeProps<IcoolingTowerFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingTowerFalse) => true;
  
    // [4]
    getDefaultProps(): IcoolingTowerFalse["props"] {
      return {
        w: 200,
        h: 150,
      };
    }
  
    // [7]
    component(shape: IcoolingTowerFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingTowerFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingTowerFalseTool extends BaseBoxShapeTool {
  static override id = "coolingTowerFalse";
  static override initial = "idle";
  override shapeType = "coolingTowerFalse";
}
