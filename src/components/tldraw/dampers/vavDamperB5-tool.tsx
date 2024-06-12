import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperB5.png"
  
  // [1]
  type IvavDamperB5 = TLBaseShape<
    "vavDamperB5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperB5Util extends BaseBoxShapeUtil<IvavDamperB5> {
    // [2]
    static override type = "vavDamperB5" as const;
    static override props: ShapeProps<IvavDamperB5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperB5) => true;
  
    // [4]
    getDefaultProps(): IvavDamperB5["props"] {
      return {
        w: 68,
        h: 75,
      };
    }
  
    // [7]
    component(shape: IvavDamperB5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperB5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperB5Tool extends BaseBoxShapeTool {
  static override id = "vavDamperB5";
  static override initial = "idle";
  override shapeType = "vavDamperB5";
}
