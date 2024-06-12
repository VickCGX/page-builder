import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperA2.png"
  
  // [1]
  type IvavDamperA2 = TLBaseShape<
    "vavDamperA2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperA2Util extends BaseBoxShapeUtil<IvavDamperA2> {
    // [2]
    static override type = "vavDamperA2" as const;
    static override props: ShapeProps<IvavDamperA2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperA2) => true;
  
    // [4]
    getDefaultProps(): IvavDamperA2["props"] {
      return {
        w: 71,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IvavDamperA2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperA2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperA2Tool extends BaseBoxShapeTool {
  static override id = "vavDamperA2";
  static override initial = "idle";
  override shapeType = "vavDamperA2";
}
