import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperH3.png"
  
  // [1]
  type IdamperH3 = TLBaseShape<
    "damperH3",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperH3Util extends BaseBoxShapeUtil<IdamperH3> {
    // [2]
    static override type = "damperH3" as const;
    static override props: ShapeProps<IdamperH3> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperH3) => true;
  
    // [4]
    getDefaultProps(): IdamperH3["props"] {
      return {
        w: 106,
        h: 41,
      };
    }
  
    // [7]
    component(shape: IdamperH3) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperH3) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperH3Tool extends BaseBoxShapeTool {
  static override id = "damperH3";
  static override initial = "idle";
  override shapeType = "damperH3";
}
