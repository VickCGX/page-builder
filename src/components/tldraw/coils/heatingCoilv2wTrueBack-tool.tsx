import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/heatingCoilv2wTrueBack.png"
  
  // [1]
  type IheatingCoilv2wTrueBack = TLBaseShape<
    "heatingCoilv2wTrueBack",
    {
      w: number;
      h: number;
    }
  >;
  
  export class heatingCoilv2wTrueBackUtil extends BaseBoxShapeUtil<IheatingCoilv2wTrueBack> {
    // [2]
    static override type = "heatingCoilv2wTrueBack" as const;
    static override props: ShapeProps<IheatingCoilv2wTrueBack> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IheatingCoilv2wTrueBack) => true;
  
    // [4]
    getDefaultProps(): IheatingCoilv2wTrueBack["props"] {
      return {
        w: 62,
        h: 112,
      };
    }
  
    // [7]
    component(shape: IheatingCoilv2wTrueBack) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IheatingCoilv2wTrueBack) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class heatingCoilv2wTrueBackTool extends BaseBoxShapeTool {
  static override id = "heatingCoilv2wTrueBack";
  static override initial = "idle";
  override shapeType = "heatingCoilv2wTrueBack";
}
