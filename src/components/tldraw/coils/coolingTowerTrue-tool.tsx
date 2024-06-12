import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingTowerTrue.gif"
  
  // [1]
  type IcoolingTowerTrue = TLBaseShape<
    "coolingTowerTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingTowerTrueUtil extends BaseBoxShapeUtil<IcoolingTowerTrue> {
    // [2]
    static override type = "coolingTowerTrue" as const;
    static override props: ShapeProps<IcoolingTowerTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingTowerTrue) => true;
  
    // [4]
    getDefaultProps(): IcoolingTowerTrue["props"] {
      return {
        w: 200,
        h: 150,
      };
    }
  
    // [7]
    component(shape: IcoolingTowerTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingTowerTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingTowerTrueTool extends BaseBoxShapeTool {
  static override id = "coolingTowerTrue";
  static override initial = "idle";
  override shapeType = "coolingTowerTrue";
}
