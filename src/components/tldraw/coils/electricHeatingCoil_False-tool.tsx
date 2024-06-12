import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/coils/electricHeatingCoil_False.png"
  
  // [1]
  type IelectricHeatingCoil_False = TLBaseShape<
    "electricHeatingCoil_False",
    {
      w: number;
      h: number;
    }
  >;
  
  export class electricHeatingCoil_FalseUtil extends BaseBoxShapeUtil<IelectricHeatingCoil_False> {
    // [2]
    static override type = "electricHeatingCoil_False" as const;
    static override props: ShapeProps<IelectricHeatingCoil_False> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IelectricHeatingCoil_False) => true;
  
    // [4]
    getDefaultProps(): IelectricHeatingCoil_False["props"] {
      return {
        w: 45,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IelectricHeatingCoil_False) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IelectricHeatingCoil_False) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class electricHeatingCoil_FalseTool extends BaseBoxShapeTool {
  static override id = "electricHeatingCoil_False";
  static override initial = "idle";
  override shapeType = "electricHeatingCoil_False";
}
