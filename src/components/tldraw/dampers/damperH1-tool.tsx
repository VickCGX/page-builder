import { BaseBoxShapeTool } from "tldraw";

import {
    BaseBoxShapeUtil,
    HTMLContainer,
    ShapeProps,
    T,
    TLBaseShape,
  } from "tldraw";
  import ImageUrl from "/images/dampers/damperH1.png"
  
  // [1]
  type IdamperH1 = TLBaseShape<
    "damperH1",
    {
      w: number;
      h: number;
    }
  >;
  
  export class damperH1Util extends BaseBoxShapeUtil<IdamperH1> {
    // [2]
    static override type = "damperH1" as const;
    static override props: ShapeProps<IdamperH1> = {
      w: T.number,
      h: T.number,
    };
  
    // [3]
    override isAspectRatioLocked = (_shape: IdamperH1) => true;
  
    // [4]
    getDefaultProps(): IdamperH1["props"] {
      return {
        w: 106,
        h: 41,
      };
    }
  
    // [7]
    component(shape: IdamperH1) {
      return (
        <HTMLContainer id={shape.id}>
          <img src={ImageUrl} width={shape.props.w} height={shape.props.h} />
        </HTMLContainer>
      );
    }
  
    // [7]
    indicator(shape: IdamperH1) {
      return <rect width={shape.props.w} height={shape.props.h} />;
    }
  }
  

export class damperH1Tool extends BaseBoxShapeTool {
  static override id = "damperH1";
  static override initial = "idle";
  override shapeType = "damperH1";
}
