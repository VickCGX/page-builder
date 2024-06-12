import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperV1.png"
  
  // [1]
  type IdamperV1 = TLBaseShape<
    "damperV1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperV1Util extends BaseBoxShapeUtil<IdamperV1> {
    // [2]
    static override type = "damperV1" as const;
    static override props: ShapeProps<IdamperV1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperV1) => true;
  
    // [4]
    getDefaultProps(): IdamperV1["props"] {
      return {
        w: 47,
        h: 99,
      };
    }
  
    // [7]
    component(shape: IdamperV1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperV1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperV1Tool extends BaseBoxShapeTool {
  static override id = "damperV1";
  static override initial = "idle";
  override shapeType = "damperV1";
}
