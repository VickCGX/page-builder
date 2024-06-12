import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperB2.png"
  
  // [1]
  type IvavDamperB2 = TLBaseShape<
    "vavDamperB2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperB2Util extends BaseBoxShapeUtil<IvavDamperB2> {
    // [2]
    static override type = "vavDamperB2" as const;
    static override props: ShapeProps<IvavDamperB2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperB2) => true;
  
    // [4]
    getDefaultProps(): IvavDamperB2["props"] {
      return {
        w: 68,
        h: 75,
      };
    }
  
    // [7]
    component(shape: IvavDamperB2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperB2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperB2Tool extends BaseBoxShapeTool {
  static override id = "vavDamperB2";
  static override initial = "idle";
  override shapeType = "vavDamperB2";
}
