import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperH2.png"
  
  // [1]
  type IdamperH2 = TLBaseShape<
    "damperH2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperH2Util extends BaseBoxShapeUtil<IdamperH2> {
    // [2]
    static override type = "damperH2" as const;
    static override props: ShapeProps<IdamperH2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperH2) => true;
  
    // [4]
    getDefaultProps(): IdamperH2["props"] {
      return {
        w: 106,
        h: 41,
      };
    }
  
    // [7]
    component(shape: IdamperH2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperH2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperH2Tool extends BaseBoxShapeTool {
  static override id = "damperH2";
  static override initial = "idle";
  override shapeType = "damperH2";
}
