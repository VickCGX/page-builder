import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperH5.png"
  
  // [1]
  type IdamperH5 = TLBaseShape<
    "damperH5",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperH5Util extends BaseBoxShapeUtil<IdamperH5> {
    // [2]
    static override type = "damperH5" as const;
    static override props: ShapeProps<IdamperH5> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperH5) => true;
  
    // [4]
    getDefaultProps(): IdamperH5["props"] {
      return {
        w: 106,
        h: 41,
      };
    }
  
    // [7]
    component(shape: IdamperH5) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperH5) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperH5Tool extends BaseBoxShapeTool {
  static override id = "damperH5";
  static override initial = "idle";
  override shapeType = "damperH5";
}
