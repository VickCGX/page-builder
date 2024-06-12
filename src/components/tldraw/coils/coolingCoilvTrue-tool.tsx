import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilvTrue.gif"
  
  // [1]
  type IcoolingCoilvTrue = TLBaseShape<
    "coolingCoilvTrue",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilvTrueUtil extends BaseBoxShapeUtil<IcoolingCoilvTrue> {
    // [2]
    static override type = "coolingCoilvTrue" as const;
    static override props: ShapeProps<IcoolingCoilvTrue> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilvTrue) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilvTrue["props"] {
      return {
        w: 50,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilvTrue) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilvTrue) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilvTrueTool extends BaseBoxShapeTool {
  static override id = "coolingCoilvTrue";
  static override initial = "idle";
  override shapeType = "coolingCoilvTrue";
}
