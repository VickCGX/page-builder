import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Editor } from "tldraw";
import bulbFalse from "/images/boolean/bulbFalse.png";
import bulbSmallFalse from "/images/boolean/bulbSmallFalse.png";
import bulbSmallTrue from "/images/boolean/bulbSmallTrue.png";
import bulbTrue from "/images/boolean/bulbTrue.png";
import occupiedFalse from "/images/boolean/occupiedFalse.png";
import occupiedSmallFalse from "/images/boolean/occupiedSmallFalse.png";
import occupiedSmallTrue from "/images/boolean/occupiedSmallTrue.png";
import occupiedTrue from "/images/boolean/occupiedTrue.png";

import { bulbFalseUtil, bulbFalseTool } from "./bulbFalse-tool";
import { bulbSmallFalseUtil, bulbSmallFalseTool } from "./bulbSmallFalse-tool";
import { bulbSmallTrueUtil, bulbSmallTrueTool } from "./bulbSmallTrue-tool";
import { bulbTrueUtil, bulbTrueTool } from "./bulbTrue-tool";
import { occupiedFalseUtil, occupiedFalseTool } from "./occupiedFalse-tool";
import { occupiedSmallFalseUtil, occupiedSmallFalseTool } from "./occupiedSmallFalse-tool";
import { occupiedSmallTrueUtil, occupiedSmallTrueTool } from "./occupiedSmallTrue-tool";
import { occupiedTrueUtil, occupiedTrueTool } from "./occupiedTrue-tool";

import { TLUiOverrides } from "tldraw";

export const booleanUiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.bulbFalse = {
      id: "bulbFalse",
      icon: "bulbFalse-icon",
      label: "bulbFalse",
      onSelect: () => {
        editor.setCurrentTool("bulbFalse");
      },
    };
    tools.bulbSmallFalse = {
      id: "bulbSmallFalse",
      icon: "bulbSmallFalse-icon",
      label: "bulbSmallFalse",
      onSelect: () => {
        editor.setCurrentTool("bulbSmallFalse");
      },
    };
    tools.bulbSmallTrue = {
      id: "bulbSmallTrue",
      icon: "bulbSmallTrue-icon",
      label: "bulbSmallTrue",
      onSelect: () => {
        editor.setCurrentTool("Building");
      },
    };
    tools.bulbTrue = {
      id: "bulbTrue",
      icon: "bulbTrue-icon",
      label: "bulbTrue",
      onSelect: () => {
        editor.setCurrentTool("bulbTrue");
      },
    };
    tools.occupiedFalse = {
      id: "occupiedFalse",
      icon: "occupiedFalse-icon",
      label: "occupiedFalse",
      onSelect: () => {
        editor.setCurrentTool("occupiedFalse");
      },
    };
    tools.occupiedSmallFalse = {
      id: "occupiedSmallFalse",
      icon: "occupiedSmallFalse-icon",
      label: "occupiedSmallFalse",
      onSelect: () => {
        editor.setCurrentTool("occupiedSmallFalse");
      },
    };
    tools.occupiedSmallTrue = {
      id: "occupiedSmallTrue",
      icon: "occupiedSmallTrue-icon",
      label: "occupiedSmallTrue",
      onSelect: () => {
        editor.setCurrentTool("occupiedSmallTrue");
      },
    };
    tools.occupiedTrue = {
      id: "occupiedTrue",
      icon: "occupiedTrue-icon",
      label: "occupiedTrue",
      onSelect: () => {
        editor.setCurrentTool("occupiedTrue");
      },
    };

    return tools;
  },
};

export const booleanShapes = [
  bulbFalseUtil,
  bulbSmallFalseUtil,
  bulbSmallTrueUtil,
  bulbTrueUtil,
  occupiedFalseUtil,
  occupiedSmallFalseUtil,
  occupiedSmallTrueUtil,
  occupiedTrueUtil,
];
export const booleanTools = [
  bulbFalseTool,
  bulbSmallFalseTool,
  bulbSmallTrueTool,
  bulbTrueTool,
  occupiedFalseTool,
  occupiedSmallFalseTool,
  occupiedSmallTrueTool,
  occupiedTrueTool,
];

export function BooleanToolbar({
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
        <AccordionTrigger className="p-2">Boolean</AccordionTrigger>
        <AccordionContent>
          <div>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "bulbFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("bulbFalse")}>
              <img src={bulbFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "bulbSmallFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("bulbSmallFalse")}>
              <img src={bulbSmallFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "bulbSmallTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("bulbSmallTrue")}>
              <img src={bulbSmallTrue} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "bulbTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("bulbTrue")}>
              <img src={bulbTrue} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "occupiedFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("occupiedFalse")}>
              <img src={occupiedFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "occupiedSmallFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("occupiedSmallFalse")}>
              <img src={occupiedSmallFalse} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "occupiedSmallTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("occupiedSmallTrue")}>
              <img src={occupiedSmallTrue} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={clsx("w-1/3", currentToolId === "occupiedTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("occupiedTrue")}>
              <img src={occupiedTrue} className="h-6" />
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}
