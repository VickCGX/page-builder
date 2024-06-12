import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperB4.png"
  
  // [1]
  type IvavDamperB4 = TLBaseShape<
    "vavDamperB4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperB4Util extends BaseBoxShapeUtil<IvavDamperB4> {
    // [2]
    static override type = "vavDamperB4" as const;
    static override props: ShapeProps<IvavDamperB4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperB4) => true;
  
    // [4]
    getDefaultProps(): IvavDamperB4["props"] {
      return {
        w: 68,
        h: 75,
      };
    }
  
    // [7]
    component(shape: IvavDamperB4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperB4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperB4Tool extends BaseBoxShapeTool {
  static override id = "vavDamperB4";
  static override initial = "idle";
  override shapeType = "vavDamperB4";
}
