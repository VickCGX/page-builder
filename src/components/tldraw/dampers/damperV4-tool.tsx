import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperV4.png"
  
  // [1]
  type IdamperV4 = TLBaseShape<
    "damperV4",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperV4Util extends BaseBoxShapeUtil<IdamperV4> {
    // [2]
    static override type = "damperV4" as const;
    static override props: ShapeProps<IdamperV4> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperV4) => true;
  
    // [4]
    getDefaultProps(): IdamperV4["props"] {
      return {
        w: 47,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IdamperV4) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperV4) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperV4Tool extends BaseBoxShapeTool {
  static override id = "damperV4";
  static override initial = "idle";
  override shapeType = "damperV4";
}
