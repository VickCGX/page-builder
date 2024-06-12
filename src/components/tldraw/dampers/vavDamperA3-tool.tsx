import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperA3.png"
  
  // [1]
  type IvavDamperA3 = TLBaseShape<
    "vavDamperA3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperA3Util extends BaseBoxShapeUtil<IvavDamperA3> {
    // [2]
    static override type = "vavDamperA3" as const;
    static override props: ShapeProps<IvavDamperA3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperA3) => true;
  
    // [4]
    getDefaultProps(): IvavDamperA3["props"] {
      return {
        w: 71,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IvavDamperA3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperA3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperA3Tool extends BaseBoxShapeTool {
  static override id = "vavDamperA3";
  static override initial = "idle";
  override shapeType = "vavDamperA3";
}
