import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperH4.png"
  
  // [1]
  type IdamperH4 = TLBaseShape<
    "damperH4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperH4Util extends BaseBoxShapeUtil<IdamperH4> {
    // [2]
    static override type = "damperH4" as const;
    static override props: ShapeProps<IdamperH4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperH4) => true;
  
    // [4]
    getDefaultProps(): IdamperH4["props"] {
      return {
        w: 106,
        h: 41,
      };
    }
  
    // [7]
    component(shape: IdamperH4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperH4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperH4Tool extends BaseBoxShapeTool {
  static override id = "damperH4";
  static override initial = "idle";
  override shapeType = "damperH4";
}
