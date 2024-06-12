import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperV2.png"
  
  // [1]
  type IdamperV2 = TLBaseShape<
    "damperV2",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperV2Util extends BaseBoxShapeUtil<IdamperV2> {
    // [2]
    static override type = "damperV2" as const;
    static override props: ShapeProps<IdamperV2> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperV2) => true;
  
    // [4]
    getDefaultProps(): IdamperV2["props"] {
      return {
        w: 47,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IdamperV2) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperV2) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperV2Tool extends BaseBoxShapeTool {
  static override id = "damperV2";
  static override initial = "idle";
  override shapeType = "damperV2";
}
