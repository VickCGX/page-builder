import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperB1.png"
  
  // [1]
  type IvavDamperB1 = TLBaseShape<
    "vavDamperB1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperB1Util extends BaseBoxShapeUtil<IvavDamperB1> {
    // [2]
    static override type = "vavDamperB1" as const;
    static override props: ShapeProps<IvavDamperB1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperB1) => true;
  
    // [4]
    getDefaultProps(): IvavDamperB1["props"] {
      return {
        w: 68,
        h: 75,
      };
    }
  
    // [7]
    component(shape: IvavDamperB1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperB1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperB1Tool extends BaseBoxShapeTool {
  static override id = "vavDamperB1";
  static override initial = "idle";
  override shapeType = "vavDamperB1";
}
