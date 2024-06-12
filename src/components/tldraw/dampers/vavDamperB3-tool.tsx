import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperB3.png"
  
  // [1]
  type IvavDamperB3 = TLBaseShape<
    "vavDamperB3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperB3Util extends BaseBoxShapeUtil<IvavDamperB3> {
    // [2]
    static override type = "vavDamperB3" as const;
    static override props: ShapeProps<IvavDamperB3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperB3) => true;
  
    // [4]
    getDefaultProps(): IvavDamperB3["props"] {
      return {
        w: 68,
        h: 75,
      };
    }
  
    // [7]
    component(shape: IvavDamperB3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperB3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperB3Tool extends BaseBoxShapeTool {
  static override id = "vavDamperB3";
  static override initial = "idle";
  override shapeType = "vavDamperB3";
}
