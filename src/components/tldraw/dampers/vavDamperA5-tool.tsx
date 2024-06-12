import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperA5.png"
  
  // [1]
  type IvavDamperA5 = TLBaseShape<
    "vavDamperA5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperA5Util extends BaseBoxShapeUtil<IvavDamperA5> {
    // [2]
    static override type = "vavDamperA5" as const;
    static override props: ShapeProps<IvavDamperA5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperA5) => true;
  
    // [4]
    getDefaultProps(): IvavDamperA5["props"] {
      return {
        w: 71,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IvavDamperA5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperA5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperA5Tool extends BaseBoxShapeTool {
  static override id = "vavDamperA5";
  static override initial = "idle";
  override shapeType = "vavDamperA5";
}
