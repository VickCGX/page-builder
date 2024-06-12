import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Editor } from "tldraw";
import damperH1 from "/images/dampers/damperH1.png";
import damperH2 from "/images/dampers/damperH2.png";
import damperH3 from "/images/dampers/damperH3.png";
import damperH4 from "/images/dampers/damperH4.png";
import damperH5 from "/images/dampers/damperH5.png";
import damperV1 from "/images/dampers/damperV1.png";
import damperV2 from "/images/dampers/damperV2.png";
import damperV3 from "/images/dampers/damperV3.png";
import damperV4 from "/images/dampers/damperV4.png";
import damperV5 from "/images/dampers/damperV5.png";
import humidifierFalse from "/images/dampers/humidifierFalse.png";
import vavDamperA1 from "/images/dampers/vavDamperA1.png";
import vavDamperA2 from "/images/dampers/vavDamperA2.png";
import vavDamperA3 from "/images/dampers/vavDamperA3.png";
import vavDamperA4 from "/images/dampers/vavDamperA4.png";
import vavDamperA5 from "/images/dampers/vavDamperA5.png";
import vavDamperB1 from "/images/dampers/vavDamperB1.png";
import vavDamperB2 from "/images/dampers/vavDamperB2.png";
import vavDamperB3 from "/images/dampers/vavDamperB3.png";
import vavDamperB4 from "/images/dampers/vavDamperB4.png";
import vavDamperB5 from "/images/dampers/vavDamperB5.png";

import { damperH1Util, damperH1Tool } from "./damperH1-tool";
import { damperH2Util, damperH2Tool } from "./damperH2-tool";
import { damperH3Util, damperH3Tool } from "./damperH3-tool";
import { damperH4Util, damperH4Tool } from "./damperH4-tool";
import { damperH5Util, damperH5Tool } from "./damperH5-tool";
import { damperV1Util, damperV1Tool } from "./damperV1-tool";
import { damperV2Util, damperV2Tool } from "./damperV2-tool";
import { damperV3Util, damperV3Tool } from "./damperV3-tool";
import { damperV4Util, damperV4Tool } from "./damperV4-tool";
import { damperV5Util, damperV5Tool } from "./damperV5-tool";
import { humidifierFalseUtil, humidifierFalseTool } from "./humidifierFalse-tool";
import { vavDamperA1Util, vavDamperA1Tool } from "./vavDamperA1-tool";
import { vavDamperA2Util, vavDamperA2Tool } from "./vavDamperA2-tool";
import { vavDamperA3Util, vavDamperA3Tool } from "./vavDamperA3-tool";
import { vavDamperA4Util, vavDamperA4Tool } from "./vavDamperA4-tool";
import { vavDamperA5Util, vavDamperA5Tool } from "./vavDamperA5-tool";
import { vavDamperB1Util, vavDamperB1Tool } from "./vavDamperB1-tool";
import { vavDamperB2Util, vavDamperB2Tool } from "./vavDamperB2-tool";
import { vavDamperB3Util,vavDamperB3Tool } from "./vavDamperB3-tool";
import { vavDamperB4Util, vavDamperB4Tool } from "./vavDamperB4-tool";
import { vavDamperB5Util, vavDamperB5Tool } from "./vavDamperB5-tool";

import { TLUiOverrides } from "tldraw";

export const dampersUiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.damperH1 = {
      id: "damperH1",
      icon: "damperH1-icon",
      label: "damperH1",
      onSelect: () => {
        editor.setCurrentTool("damperH1");
      },
    };
    tools.damperH2 = {
      id: "damperH2",
      icon: "damperH2-icon",
      label: "damperH2",
      onSelect: () => {
        editor.setCurrentTool("damperH2");
      },
    };
    tools.damperH3 = {
      id: "damperH3",
      icon: "damperH3-icon",
      label: "damperH3",
      onSelect: () => {
        editor.setCurrentTool("damperH3");
      },
    };
    tools.damperH4 = {
      id: "damperH4",
      icon: "damperH4-icon",
      label: "damperH4",
      onSelect: () => {
        editor.setCurrentTool("damperH4");
      },
    };
    tools.damperH5 = {
      id: "damperH5",
      icon: "damperH5-icon",
      label: "damperH5",
      onSelect: () => {
        editor.setCurrentTool("damperH5");
      },
    };
    tools.damperV1 = {
      id: "damperV1",
      icon: "damperV1-icon",
      label: "damperV1",
      onSelect: () => {
        editor.setCurrentTool("damperV1");
      },
    };
    tools.damperV2 = {
      id: "damperV2",
      icon: "damperV2-icon",
      label: "damperV2",
      onSelect: () => {
        editor.setCurrentTool("damperV2");
      },
    };
    tools.damperV4 = {
      id: "damperV4",
      icon: "damperV4-icon",
      label: "damperV4",
      onSelect: () => {
        editor.setCurrentTool("damperV4");
      },
    };
    tools.damperV5 = {
      id: "damperV5",
      icon: "damperV5-icon",
      label: "damperV5",
      onSelect: () => {
        editor.setCurrentTool("damperV5");
      },
    };
    tools.humidifierFalse = {
      id: "humidifierFalse",
      icon: "humidifierFalse-icon",
      label: "humidifierFalse",
      onSelect: () => {
        editor.setCurrentTool("humidifierFalse");
      },
    };
    tools.vavDamperA1 = {
      id: "vavDamperA1",
      icon: "vavDamperA1-icon",
      label: "vavDamperA1",
      onSelect: () => {
        editor.setCurrentTool("vavDamperA1");
      },
    };
    tools.vavDamperA2 = {
      id: "vavDamperA2",
      icon: "vavDamperA2-icon",
      label: "vavDamperA2",
      onSelect: () => {
        editor.setCurrentTool("vavDamperA2");
      },
    };
    tools.vavDamperA3 = {
      id: "vavDamperA3",
      icon: "vavDamperA3-icon",
      label: "vavDamperA3",
      onSelect: () => {
        editor.setCurrentTool("vavDamperA3");
      },
    };
    tools.vavDamperA4 = {
      id: "vavDamperA4",
      icon: "vavDamperA4-icon",
      label: "vavDamperA4",
      onSelect: () => {
        editor.setCurrentTool("vavDamperA4");
      },
    };
    tools.vavDamperA5 = {
      id: "vavDamperA5",
      icon: "vavDamperA5-icon",
      label: "vavDamperA5",
      onSelect: () => {
        editor.setCurrentTool("vavDamperA5");
      },
    };
    tools.vavDamperB1 = {
      id: "vavDamperB1",
      icon: "vavDamperB1-icon",
      label: "vavDamperB1",
      onSelect: () => {
        editor.setCurrentTool("vavDamperB1");
      },
    };
    tools.vavDamperB2 = {
      id: "vavDamperB2",
      icon: "vavDamperB2-icon",
      label: "vavDamperB2",
      onSelect: () => {
        editor.setCurrentTool("vavDamperB2");
      },
    };
    tools.vavDamperB3 = {
      id: "vavDamperB3",
      icon: "vavDamperB3-icon",
      label: "vavDamperB3",
      onSelect: () => {
        editor.setCurrentTool("vavDamperB3");
      },
    };
    tools.vavDamperB4 = {
      id: "vavDamperB4",
      icon: "vavDamperB4-icon",
      label: "vavDamperB4",
      onSelect: () => {
        editor.setCurrentTool("vavDamperB4");
      },
    };
    tools.vavDamperB5 = {
      id: "vavDamperB5",
      icon: "vavDamperB5-icon",
      label: "vavDamperB5",
      onSelect: () => {
        editor.setCurrentTool("vavDamperB5");
      },
    };

    return tools;
  },
};

export const dampersShapes = [
  damperH1Util,
  damperH2Util,
  damperH3Util,
  damperH4Util,
  damperH5Util,
  damperV1Util,
  damperV2Util,
  damperV3Util,
  damperV4Util,
  damperV5Util,
  humidifierFalseUtil,
  vavDamperA1Util,
  vavDamperA2Util,
  vavDamperA3Util,
  vavDamperA4Util,
  vavDamperA5Util,
  vavDamperB1Util,
  vavDamperB2Util,
  vavDamperB3Util,
  vavDamperB4Util,
  vavDamperB5Util,
];
export const dampersTools = [
  damperH1Tool,
  damperH2Tool,
  damperH3Tool,
  damperH4Tool,
  damperH5Tool,
  damperV1Tool,
  damperV2Tool,
  damperV3Tool,
  damperV4Tool,
  damperV5Tool,
  humidifierFalseTool,
  vavDamperA1Tool,
  vavDamperA2Tool,
  vavDamperA3Tool,
  vavDamperA4Tool,
  vavDamperA5Tool,
  vavDamperB1Tool,
  vavDamperB2Tool,
  vavDamperB3Tool,
  vavDamperB4Tool,
  vavDamperB5Tool,
];

export function DampersToolbar({
  currentToolId,
  editor,
  value
}: {
  currentToolId: string | undefined;
  editor: Editor | null;
  value: string
}) {
  return (
    <>
      <AccordionItem value={value}>
        <AccordionTrigger className="p-2">Dampers</AccordionTrigger>
        <AccordionContent>
          <div>
            <Button
              variant={"ghost"}
              title="damperH1"
              className={clsx("w-1/3", currentToolId === "damperH1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperH1")}>
              <img src={damperH1} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperH2"
              className={clsx("w-1/3", currentToolId === "damperH2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperH2")}>
              <img src={damperH2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperH3"
              className={clsx("w-1/3", currentToolId === "damperH3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperH3")}>
              <img src={damperH3} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="damperH4"
              className={clsx("w-1/3", currentToolId === "damperH4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperH4")}>
              <img src={damperH4} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperH5"
              className={clsx("w-1/3", currentToolId === "damperH5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperH5")}>
              <img src={damperH5} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperV1"
              className={clsx("w-1/3", currentToolId === "damperV1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperV1")}>
              <img src={damperV1} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="damperV2"
              className={clsx("w-1/3", currentToolId === "damperV2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperV2")}>
              <img src={damperV2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperV3"
              className={clsx("w-1/3", currentToolId === "damperV3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperV3")}>
              <img src={damperV3} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="damperV4"
              className={clsx("w-1/3", currentToolId === "damperV4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperV4")}>
              <img src={damperV4} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="damperV5"
              className={clsx("w-1/3", currentToolId === "damperV5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("damperV5")}>
              <img src={damperV5} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="humidifierFalse"
              className={clsx("w-1/3", currentToolId === "humidifierFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("humidifierFalse")}>
              <img src={humidifierFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperA1"
              className={clsx("w-1/3", currentToolId === "vavDamperA1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperA1")}>
              <img src={vavDamperA1} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="vavDamperA2"
              className={clsx("w-1/3", currentToolId === "vavDamperA2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperA2")}>
              <img src={vavDamperA2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperA3"
              className={clsx("w-1/3", currentToolId === "vavDamperA3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperA3")}>
              <img src={vavDamperA3} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperA4"
              className={clsx("w-1/3", currentToolId === "vavDamperA4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperA4")}>
              <img src={vavDamperA4} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="vavDamperA5"
              className={clsx("w-1/3", currentToolId === "vavDamperA5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperA5")}>
              <img src={vavDamperA5} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperB1"
              className={clsx("w-1/3", currentToolId === "vavDamperB1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperB1")}>
              <img src={vavDamperB1} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperB2"
              className={clsx("w-1/3", currentToolId === "vavDamperB2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperB2")}>
              <img src={vavDamperB2} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="vavDamperB3"
              className={clsx("w-1/3", currentToolId === "vavDamperB3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperB3")}>
              <img src={vavDamperB3} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperB4"
              className={clsx("w-1/3", currentToolId === "vavDamperB4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperB4")}>
              <img src={vavDamperB4} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="vavDamperB5"
              className={clsx("w-1/3", currentToolId === "vavDamperB5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("vavDamperB5")}>
              <img src={vavDamperB5} className="h-6" />
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}
