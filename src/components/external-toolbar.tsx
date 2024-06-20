import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckBoxIcon,
  CloudIcon,
  DiamondIcon,
  HexagonIcon,
  LineIcon,
  OvalIcon,
  RhombusIcon,
  StarIcon,
  TrapezoidIcon,
  XBoxIcon,
} from "@/icons";
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
import clsx from "clsx";
import { useState } from "react";
import { Editor, GeoShapeGeoStyle, useValue } from "tldraw";
import JsonToolbar from "./json-toolbar";
import SelectBackgound from "./select-background";

export default function ExternalToolbar({ editor }: { editor: Editor | null }) {
  const currentToolId = useValue(
    "current tool id",
    () => editor?.getCurrentToolId(),
    [editor]
  );
  const [geoSelected, setGeoSelected] = useState<string>("");
  const handleSelectGeo = (geoName: string) => {
    editor?.setCurrentTool("geo");
    // @ts-ignore
    editor?.setStyleForNextShapes(GeoShapeGeoStyle, geoName);
    setGeoSelected(geoName);
  };
  return (
    <ScrollArea className="h-screen rounded-md border p-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-0">
          <AccordionTrigger className="p-2">Controls</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row flex-wrap pt-3">
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "select" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("select")}
              >
                <CursorArrowIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "hand" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("hand")}
              >
                <HandIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "draw" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("draw")}
              >
                <Pencil1Icon height={24} width={24} color="black" />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "eraser" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("eraser")}
              >
                <EraserIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "arrow" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("arrow")}
              >
                <ArrowTopRightIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "text" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("text")}
              >
                <TextIcon height={24} width={24} color="black" />
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2">Shapes</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row flex-wrap pt-3">
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "arrow-down" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("arrow-down")}
              >
                <ArrowDownIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "arrow-left" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("arrow-left")}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "arrow-right" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("arrow-right")}
              >
                <ArrowRightIcon />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "arrow-up" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("arrow-up")}
              >
                <ArrowUpIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "check-box" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("check-box")}
              >
                <CheckBoxIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "cloud" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("cloud")}
              >
                <CloudIcon />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "diamond" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("diamond")}
              >
                <DiamondIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "ellipse" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("ellipse")}
              >
                <CircleIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "hexagon" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("hexagon")}
              >
                <HexagonIcon />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "oval" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("oval")}
              >
                <OvalIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "rectangle" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("rectangle")}
              >
                <BoxIcon height={24} width={24} color="black" />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "rhombus" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("rhombus")}
              >
                <RhombusIcon />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "star" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("star")}
              >
                <StarIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "trapezoid" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("trapezoid")}
              >
                <TrapezoidIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "triangle" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("triangle")}
              >
                <VercelLogoIcon height={24} width={24} color="black" />
              </Button>

              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  geoSelected === "x-box" ? "bg-white" : ""
                )}
                onClick={() => handleSelectGeo("x-box")}
              >
                <XBoxIcon />
              </Button>
              <Button
                variant={"ghost"}
                className={clsx(
                  "w-1/3",
                  currentToolId === "line" ? "bg-white" : ""
                )}
                onClick={() => editor?.setCurrentTool("line")}
              >
                <LineIcon />
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <JsonToolbar />
      </Accordion>
      <div className="flex flex-col gap-y-3 pt-3 pl-2">
        <SelectBackgound />
      </div>
    </ScrollArea>
  );
}
