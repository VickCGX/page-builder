import clsx from "clsx";
import { Button } from "../ui/button";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  CloudIcon,
  CheckBoxIcon,
  XBoxIcon,
  HexagonIcon,
  DiamondIcon,
  OvalIcon,
  RhombusIcon,
  TrapezoidIcon,
  StarIcon,
  LineIcon,
} from "./icons";
import { Editor, GeoShapeGeoStyle, useValue } from "tldraw";
import { useState } from "react";
import {
  ArrowTopRightIcon,
  BoxIcon,
  CircleIcon,
  CursorArrowIcon,
  EraserIcon,
  HandIcon,
  Pencil1Icon,
  TextIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {BooleanToolbar} from "./boolean";
import {CoilsToolbar} from "./coils";
import { DampersToolbar } from "./dampers";

export default function ExternalToolbar({ editor }: { editor: Editor | null }) {
  const currentToolId = useValue("current tool id", () => editor?.getCurrentToolId(), [editor]);
  const [geoSelected, setGeoSelected] = useState<string>("");
  const handleSelectGeo = (geoName: string) => {
    editor?.setCurrentTool("geo");
    editor?.setStyleForNextShapes(GeoShapeGeoStyle, geoName);
    setGeoSelected(geoName);
  };
  return (
    <div className="overflow-y-auto h-screen">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2">Controls</AccordionTrigger>
          <AccordionContent>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "select" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("select")}>
                <CursorArrowIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "hand" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("hand")}>
                <HandIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "draw" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("draw")}>
                <Pencil1Icon height={24} width={24} color="black" />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "eraser" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("eraser")}>
                <EraserIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "arrow" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("arrow")}>
                <ArrowTopRightIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "text" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("text")}>
                <TextIcon height={24} width={24} color="black" />
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="p-2">Shapes</AccordionTrigger>
          <AccordionContent>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "arrow-down" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("arrow-down")}>
                <ArrowDownIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "arrow-left" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("arrow-left")}>
                <ArrowLeftIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "arrow-right" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("arrow-right")}>
                <ArrowRightIcon />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "arrow-up" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("arrow-up")}>
                <ArrowUpIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "check-box" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("check-box")}>
                <CheckBoxIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "cloud" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("cloud")}>
                <CloudIcon />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "diamond" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("diamond")}>
                <DiamondIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "ellipse" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("ellipse")}>
                <CircleIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "hexagon" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("hexagon")}>
                <HexagonIcon />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "oval" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("oval")}>
                <OvalIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "rectangle" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("rectangle")}>
                <BoxIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "rhombus" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("rhombus")}>
                <RhombusIcon />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "star" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("star")}>
                <StarIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "trapezoid" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("trapezoid")}>
                <TrapezoidIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "triangle" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("triangle")}>
                <VercelLogoIcon height={24} width={24} color="black" />
              </Button>
            </div>
            <div>
              <Button
                variant={"ghost"}
                className={clsx(geoSelected === "x-box" ? "bg-white" : "")}
                onClick={() => handleSelectGeo("x-box")}>
                <XBoxIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(currentToolId === "line" ? "bg-white" : "")}
                onClick={() => editor?.setCurrentTool("line")}>
                <LineIcon />
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <BooleanToolbar value="item-3" currentToolId={currentToolId} editor={editor} />
        <CoilsToolbar value="item-4" currentToolId={currentToolId} editor={editor} />
        <DampersToolbar value="item-5" currentToolId={currentToolId} editor={editor} />
      </Accordion>
    </div>
  );
}
