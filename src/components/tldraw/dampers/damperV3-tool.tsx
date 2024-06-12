import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperV3.png"
  
  // [1]
  type IdamperV3 = TLBaseShape<
    "damperV3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperV3Util extends BaseBoxShapeUtil<IdamperV3> {
    // [2]
    static override type = "damperV3" as const;
    static override props: ShapeProps<IdamperV3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperV3) => true;
  
    // [4]
    getDefaultProps(): IdamperV3["props"] {
      return {
        w: 47,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IdamperV3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperV3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperV3Tool extends BaseBoxShapeTool {
  static override id = "damperV3";
  static override initial = "idle";
  override shapeType = "damperV3";
}
