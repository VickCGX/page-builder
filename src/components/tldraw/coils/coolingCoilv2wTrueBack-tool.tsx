import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/coolingCoilv2wTrueBack.png"
  
  // [1]
  type IcoolingCoilv2wTrueBack = TLBaseShape<
    "coolingCoilv2wTrueBack",
    {
      w: number;
      h: number;
    }
  >;
  
  export class coolingCoilv2wTrueBackUtil extends BaseBoxShapeUtil<IcoolingCoilv2wTrueBack> {
    // [2]
    static override type = "coolingCoilv2wTrueBack" as const;
    static override props: ShapeProps<IcoolingCoilv2wTrueBack> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IcoolingCoilv2wTrueBack) => true;
  
    // [4]
    getDefaultProps(): IcoolingCoilv2wTrueBack["props"] {
      return {
        w: 62,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IcoolingCoilv2wTrueBack) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IcoolingCoilv2wTrueBack) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class coolingCoilv2wTrueBackTool extends BaseBoxShapeTool {
  static override id = "coolingCoilv2wTrueBack";
  static override initial = "idle";
  override shapeType = "coolingCoilv2wTrueBack";
}
