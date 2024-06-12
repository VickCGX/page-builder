import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperA4.png"
  
  // [1]
  type IvavDamperA4 = TLBaseShape<
    "vavDamperA4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperA4Util extends BaseBoxShapeUtil<IvavDamperA4> {
    // [2]
    static override type = "vavDamperA4" as const;
    static override props: ShapeProps<IvavDamperA4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperA4) => true;
  
    // [4]
    getDefaultProps(): IvavDamperA4["props"] {
      return {
        w: 71,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IvavDamperA4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperA4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperA4Tool extends BaseBoxShapeTool {
  static override id = "vavDamperA4";
  static override initial = "idle";
  override shapeType = "vavDamperA4";
}
