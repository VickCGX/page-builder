import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperV5.png"
  
  // [1]
  type IdamperV5 = TLBaseShape<
    "damperV5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperV5Util extends BaseBoxShapeUtil<IdamperV5> {
    // [2]
    static override type = "damperV5" as const;
    static override props: ShapeProps<IdamperV5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperV5) => true;
  
    // [4]
    getDefaultProps(): IdamperV5["props"] {
      return {
        w: 47,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IdamperV5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperV5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperV5Tool extends BaseBoxShapeTool {
  static override id = "damperV5";
  static override initial = "idle";
  override shapeType = "damperV5";
}
