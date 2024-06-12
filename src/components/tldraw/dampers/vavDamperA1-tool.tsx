import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/vavDamperA1.png"
  
  // [1]
  type IvavDamperA1 = TLBaseShape<
    "vavDamperA1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class vavDamperA1Util extends BaseBoxShapeUtil<IvavDamperA1> {
    // [2]
    static override type = "vavDamperA1" as const;
    static override props: ShapeProps<IvavDamperA1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IvavDamperA1) => true;
  
    // [4]
    getDefaultProps(): IvavDamperA1["props"] {
      return {
        w: 71,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IvavDamperA1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IvavDamperA1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class vavDamperA1Tool extends BaseBoxShapeTool {
  static override id = "vavDamperA1";
  static override initial = "idle";
  override shapeType = "vavDamperA1";
}
