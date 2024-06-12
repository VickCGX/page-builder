import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/humidifierFalse.png"
  
  // [1]
  type IhumidifierFalse = TLBaseShape<
    "humidifierFalse",
    {
      w: number;
      h: number;
    }
  >;
  
  export class humidifierFalseUtil extends BaseBoxShapeUtil<IhumidifierFalse> {
    // [2]
    static override type = "humidifierFalse" as const;
    static override props: ShapeProps<IhumidifierFalse> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IhumidifierFalse) => true;
  
    // [4]
    getDefaultProps(): IhumidifierFalse["props"] {
      return {
        w: 63,
        h: 87,
      };
    }
  
    // [7]
    component(shape: IhumidifierFalse) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IhumidifierFalse) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class humidifierFalseTool extends BaseBoxShapeTool {
  static override id = "humidifierFalse";
  static override initial = "idle";
  override shapeType = "humidifierFalse";
}
