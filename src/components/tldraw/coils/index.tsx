import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Editor } from "tldraw";
import coolingCoilv_1 from "/images/coils/coolingCoilv_1.png";
import coolingCoilv_2 from "/images/coils/coolingCoilv_2.png";
import coolingCoilv_3 from "/images/coils/coolingCoilv_3.png";
import coolingCoilv_4 from "/images/coils/coolingCoilv_4.png";
import coolingCoilv_5 from "/images/coils/coolingCoilv_5.png";
import coolingCoilv2w_1 from "/images/coils/coolingCoilv2w_1.png";
import coolingCoilv2w_2 from "/images/coils/coolingCoilv2w_2.png";
import coolingCoilv2w_3 from "/images/coils/coolingCoilv2w_3.png";
import coolingCoilv2w_4 from "/images/coils/coolingCoilv2w_4.png";
import coolingCoilv2w_5 from "/images/coils/coolingCoilv2w_5.png";
import coolingCoilv2wFalse from "/images/coils/coolingCoilv2wFalse.png";
import coolingCoilv2wTrue from "/images/coils/coolingCoilv2wTrue.gif";
import coolingCoilv2wTrueBack from "/images/coils/coolingCoilv2wTrueBack.png";
import coolingCoilvFalse from "/images/coils/coolingCoilvFalse.png";
import coolingCoilvTrue from "/images/coils/coolingCoilvTrue.gif";
import coolingTowerFalse from "/images/coils/coolingTowerFalse.png";
import coolingTowerTrue from "/images/coils/coolingTowerTrue.gif";
import electricHeatingCoil_False from "/images/coils/electricHeatingCoil_False.png";
import electricHeatingCoilFalse from "/images/coils/electricHeatingCoilFalse.png";
import electricHeatingCoilTrue from "/images/coils/electricHeatingCoilTrue.gif";
import electricHeatingCoilTrue_1 from "/images/coils/electricHeatingCoilTrue_1.png";
import electricHeatingCoilTrue_2 from "/images/coils/electricHeatingCoilTrue_2.png";
import electricHeatingCoilTrue_3 from "/images/coils/electricHeatingCoilTrue_3.png";
import electricHeatingCoilTrue_4 from "/images/coils/electricHeatingCoilTrue_4.png";
import electricHeatingCoilTrue_5 from "/images/coils/electricHeatingCoilTrue_5.png";
import filterH_1 from "/images/coils/filterH_1.png";
import filterH_2 from "/images/coils/filterH_2.png";
import filterH_3 from "/images/coils/filterH_3.png";
import filterH_4 from "/images/coils/filterH_4.png";
import filterH_5 from "/images/coils/filterH_5.png";
import filterV_1 from "/images/coils/filterV_1.png";
import filterV_2 from "/images/coils/filterV_2.png";
import filterV_3 from "/images/coils/filterV_3.png";
import filterV_4 from "/images/coils/filterV_4.png";
import filterV_5 from "/images/coils/filterV_5.png";
import heatingCoilv_1 from "/images/coils/heatingCoilv_1.png";
import heatingCoilv_2 from "/images/coils/heatingCoilv_2.png";
import heatingCoilv_3 from "/images/coils/heatingCoilv_3.png";
import heatingCoilv_4 from "/images/coils/heatingCoilv_4.png";
import heatingCoilv_5 from "/images/coils/heatingCoilv_5.png";
import heatingCoilv2w_1 from "/images/coils/heatingCoilv2w_1.png";
import heatingCoilv2w_2 from "/images/coils/heatingCoilv2w_2.png";
import heatingCoilv2w_3 from "/images/coils/heatingCoilv2w_3.png";
import heatingCoilv2w_4 from "/images/coils/heatingCoilv2w_4.png";
import heatingCoilv2w_5 from "/images/coils/heatingCoilv2w_5.png";
import heatingCoilv2wFalse from "/images/coils/heatingCoilv2wFalse.png";
import heatingCoilv2wTrue from "/images/coils/heatingCoilv2wTrue.gif";
import heatingCoilv2wTrueBack from "/images/coils/heatingCoilv2wTrueBack.png";
import heatingCoilvFalse from "/images/coils/heatingCoilvFalse.png";
import heatingCoilvTrue from "/images/coils/heatingCoilvTrue.gif";

import { coolingCoilv_1Util, coolingCoilv_1Tool } from "./coolingCoilv_1-tool";
import { coolingCoilv_2Util, coolingCoilv_2Tool } from "./coolingCoilv_2-tool";
import { coolingCoilv_3Util, coolingCoilv_3Tool } from "./coolingCoilv_3-tool";
import { coolingCoilv_4Util, coolingCoilv_4Tool } from "./coolingCoilv_4-tool";
import { coolingCoilv_5Util, coolingCoilv_5Tool } from "./coolingCoilv_5-tool";
import { coolingCoilv2w_1Util, coolingCoilv2w_1Tool } from "./coolingCoilv2w_1-tool";
import { coolingCoilv2w_2Util, coolingCoilv2w_2Tool } from "./coolingCoilv2w_2-tool";
import { coolingCoilv2w_3Util, coolingCoilv2w_3Tool } from "./coolingCoilv2w_3-tool";
import { coolingCoilv2w_4Util, coolingCoilv2w_4Tool } from "./coolingCoilv2w_4-tool";
import { coolingCoilv2w_5Util, coolingCoilv2w_5Tool } from "./coolingCoilv2w_5-tool";
import { coolingCoilv2wFalseUtil, coolingCoilv2wFalseTool } from "./coolingCoilv2wFalse-tool";
import { coolingCoilv2wTrueUtil, coolingCoilv2wTrueTool } from "./coolingCoilv2wTrue-tool";
import {
  coolingCoilv2wTrueBackUtil,
  coolingCoilv2wTrueBackTool,
} from "./coolingCoilv2wTrueBack-tool";
import { coolingCoilvFalseUtil, coolingCoilvFalseTool } from "./coolingCoilvFalse-tool";
import { coolingCoilvTrueUtil, coolingCoilvTrueTool } from "./coolingCoilvTrue-tool";
import { coolingTowerFalseUtil, coolingTowerFalseTool } from "./coolingTowerFalse-tool";
import { coolingTowerTrueUtil, coolingTowerTrueTool } from "./coolingTowerTrue-tool";
import {
  electricHeatingCoil_FalseUtil,
  electricHeatingCoil_FalseTool,
} from "./electricHeatingCoil_False-tool";
import {
  electricHeatingCoilFalseUtil,
  electricHeatingCoilFalseTool,
} from "./electricHeatingCoilFalse-tool";
import {
  electricHeatingCoilTrueUtil,
  electricHeatingCoilTrueTool,
} from "./electricHeatingCoilTrue-tool";
import {
  electricHeatingCoilTrue_1Util,
  electricHeatingCoilTrue_1Tool,
} from "./electricHeatingCoilTrue_1-tool";
import {
  electricHeatingCoilTrue_2Util,
  electricHeatingCoilTrue_2Tool,
} from "./electricHeatingCoilTrue_2-tool";
import {
  electricHeatingCoilTrue_3Util,
  electricHeatingCoilTrue_3Tool,
} from "./electricHeatingCoilTrue_3-tool";
import {
  electricHeatingCoilTrue_4Util,
  electricHeatingCoilTrue_4Tool,
} from "./electricHeatingCoilTrue_4-tool";
import {
  electricHeatingCoilTrue_5Util,
  electricHeatingCoilTrue_5Tool,
} from "./electricHeatingCoilTrue_5-tool";
import { filterH_1Util, filterH_1Tool } from "./filterH_1-tool";
import { filterH_2Util, filterH_2Tool } from "./filterH_2-tool";
import { filterH_3Util, filterH_3Tool } from "./filterH_3-tool";
import { filterH_4Util, filterH_4Tool } from "./filterH_4-tool";
import { filterH_5Util, filterH_5Tool } from "./filterH_5-tool";
import { filterV_1Util, filterV_1Tool } from "./filterV_1-tool";
import { filterV_2Util, filterV_2Tool } from "./filterV_2-tool";
import { filterV_3Util, filterV_3Tool } from "./filterV_3-tool";
import { filterV_4Util, filterV_4Tool } from "./filterV_4-tool";
import { filterV_5Util, filterV_5Tool } from "./filterV_5-tool";
import { heatingCoilv_1Util, heatingCoilv_1Tool } from "./heatingCoilv_1-tool";
import { heatingCoilv_2Util, heatingCoilv_2Tool } from "./heatingCoilv_2-tool";
import { heatingCoilv_3Util, heatingCoilv_3Tool } from "./heatingCoilv_3-tool";
import { heatingCoilv_4Util, heatingCoilv_4Tool } from "./heatingCoilv_4-tool";
import { heatingCoilv_5Util, heatingCoilv_5Tool } from "./heatingCoilv_5-tool";
import { heatingCoilv2w_1Util, heatingCoilv2w_1Tool } from "./heatingCoilv2w_1-tool";
import { heatingCoilv2w_2Util, heatingCoilv2w_2Tool } from "./heatingCoilv2w_2-tool";
import { heatingCoilv2w_3Util, heatingCoilv2w_3Tool } from "./heatingCoilv2w_3-tool";
import { heatingCoilv2w_4Util, heatingCoilv2w_4Tool } from "./heatingCoilv2w_4-tool";
import { heatingCoilv2w_5Util, heatingCoilv2w_5Tool } from "./heatingCoilv2w_5-tool";
import { heatingCoilv2wFalseUtil, heatingCoilv2wFalseTool } from "./heatingCoilv2wFalse-tool";
import { heatingCoilv2wTrueUtil, heatingCoilv2wTrueTool } from "./heatingCoilv2wTrue-tool";
import {
  heatingCoilv2wTrueBackUtil,
  heatingCoilv2wTrueBackTool,
} from "./heatingCoilv2wTrueBack-tool";
import { heatingCoilvFalseUtil, heatingCoilvFalseTool } from "./heatingCoilvFalse-tool";
import { heatingCoilvTrueUtil, heatingCoilvTrueTool } from "./heatingCoilvTrue-tool";

export const coilsShapes = [
  coolingCoilv_1Util,
  coolingCoilv_2Util,
  coolingCoilv_3Util,
  coolingCoilv_4Util,
  coolingCoilv_5Util,
  coolingCoilv2w_1Util,
  coolingCoilv2w_2Util,
  coolingCoilv2w_3Util,
  coolingCoilv2w_4Util,
  coolingCoilv2w_5Util,
  coolingCoilv2wFalseUtil,
  coolingCoilv2wTrueUtil,
  coolingCoilv2wTrueBackUtil,
  coolingCoilvFalseUtil,
  coolingCoilvTrueUtil,
  coolingTowerFalseUtil,
  coolingTowerTrueUtil,
  electricHeatingCoil_FalseUtil,
  electricHeatingCoilFalseUtil,
  electricHeatingCoilTrueUtil,
  electricHeatingCoilTrue_1Util,
  electricHeatingCoilTrue_2Util,
  electricHeatingCoilTrue_3Util,
  electricHeatingCoilTrue_4Util,
  electricHeatingCoilTrue_5Util,
  filterH_1Util,
  filterH_2Util,
  filterH_3Util,
  filterH_4Util,
  filterH_5Util,
  filterV_1Util,
  filterV_2Util,
  filterV_3Util,
  filterV_4Util,
  filterV_5Util,
  heatingCoilv_1Util,
  heatingCoilv_2Util,
  heatingCoilv_3Util,
  heatingCoilv_4Util,
  heatingCoilv_5Util,
  heatingCoilv2w_1Util,
  heatingCoilv2w_2Util,
  heatingCoilv2w_3Util,
  heatingCoilv2w_4Util,
  heatingCoilv2w_5Util,
  heatingCoilv2wFalseUtil,
  heatingCoilv2wTrueUtil,
  heatingCoilv2wTrueBackUtil,
  heatingCoilvFalseUtil,
  heatingCoilvTrueUtil,
];
export const coilsTools = [
  coolingCoilv_1Tool,
  coolingCoilv_2Tool,
  coolingCoilv_3Tool,
  coolingCoilv_4Tool,
  coolingCoilv_5Tool,
  coolingCoilv2w_1Tool,
  coolingCoilv2w_2Tool,
  coolingCoilv2w_3Tool,
  coolingCoilv2w_4Tool,
  coolingCoilv2w_5Tool,
  coolingCoilv2wFalseTool,
  coolingCoilv2wTrueTool,
  coolingCoilv2wTrueBackTool,
  coolingCoilvFalseTool,
  coolingCoilvTrueTool,
  coolingTowerFalseTool,
  coolingTowerTrueTool,
  electricHeatingCoil_FalseTool,
  electricHeatingCoilFalseTool,
  electricHeatingCoilTrueTool,
  electricHeatingCoilTrue_1Tool,
  electricHeatingCoilTrue_2Tool,
  electricHeatingCoilTrue_3Tool,
  electricHeatingCoilTrue_4Tool,
  electricHeatingCoilTrue_5Tool,
  filterH_1Tool,
  filterH_2Tool,
  filterH_3Tool,
  filterH_4Tool,
  filterH_5Tool,
  filterV_1Tool,
  filterV_2Tool,
  filterV_3Tool,
  filterV_4Tool,
  filterV_5Tool,
  heatingCoilv_1Tool,
  heatingCoilv_2Tool,
  heatingCoilv_3Tool,
  heatingCoilv_4Tool,
  heatingCoilv_5Tool,
  heatingCoilv2w_1Tool,
  heatingCoilv2w_2Tool,
  heatingCoilv2w_3Tool,
  heatingCoilv2w_4Tool,
  heatingCoilv2w_5Tool,
  heatingCoilv2wFalseTool,
  heatingCoilv2wTrueTool,
  heatingCoilv2wTrueBackTool,
  heatingCoilvFalseTool,
  heatingCoilvTrueTool,
];

export function CoilsToolbar({
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
        <AccordionTrigger className="p-2">Coils</AccordionTrigger>
        <AccordionContent>
          <div>
            <Button
              variant={"ghost"}
              title="coolingCoilv_1"
              className={clsx("w-1/3", currentToolId === "coolingCoilv_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv_1")}>
              <img src={coolingCoilv_1} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv_2"
              className={clsx("w-1/3", currentToolId === "coolingCoilv_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv_2")}>
              <img src={coolingCoilv_2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv_3"
              className={clsx("w-1/3", currentToolId === "coolingCoilv_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv_3")}>
              <img src={coolingCoilv_3} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="coolingCoilv_4"
              className={clsx("w-1/3", currentToolId === "coolingCoilv_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv_4")}>
              <img src={coolingCoilv_4} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv_5"
              className={clsx("w-1/3", currentToolId === "coolingCoilv_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv_5")}>
              <img src={coolingCoilv_5} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv2w_1"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2w_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2w_1")}>
              <img src={coolingCoilv2w_1} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="coolingCoilv2w_2"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2w_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2w_2")}>
              <img src={coolingCoilv2w_2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv2w_3"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2w_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2w_3")}>
              <img src={coolingCoilv2w_3} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv2w_4"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2w_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2w_4")}>
              <img src={coolingCoilv2w_4} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="coolingCoilv2w_5"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2w_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2w_5")}>
              <img src={coolingCoilv2w_5} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv2wFalse"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2wFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2wFalse")}>
              <img src={coolingCoilv2wFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilv2wTrue"
              className={clsx("w-1/3", currentToolId === "coolingCoilv2wTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilv2wTrue")}>
              <img src={coolingCoilv2wTrue} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="coolingCoilv2wTrueBack"
              className={clsx(
                "w-1/3",
                currentToolId === "coolingCoilv2wTrueBack" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("coolingCoilv2wTrueBack")}>
              <img src={coolingCoilv2wTrueBack} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilvFalse"
              className={clsx("w-1/3", currentToolId === "coolingCoilvFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilvFalse")}>
              <img src={coolingCoilvFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingCoilvTrue"
              className={clsx("w-1/3", currentToolId === "coolingCoilvTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingCoilvTrue")}>
              <img src={coolingCoilvTrue} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="electricHeatingCoil_False"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoil_False" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoil_False")}>
              <img src={electricHeatingCoil_False} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="electricHeatingCoilFalse"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilFalse" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilFalse")}>
              <img src={electricHeatingCoilFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue")}>
              <img src={electricHeatingCoilTrue} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue_1"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue_1" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue_1")}>
              <img src={electricHeatingCoilTrue_1} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue_2"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue_2" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue_2")}>
              <img src={electricHeatingCoilTrue_2} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue_3"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue_3" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue_3")}>
              <img src={electricHeatingCoilTrue_3} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue_4"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue_4" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue_4")}>
              <img src={electricHeatingCoilTrue_4} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="electricHeatingCoilTrue_5"
              className={clsx(
                "w-1/3",
                currentToolId === "electricHeatingCoilTrue_5" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("electricHeatingCoilTrue_5")}>
              <img src={electricHeatingCoilTrue_5} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="filterV_1"
              className={clsx("w-1/3", currentToolId === "filterV_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterV_1")}>
              <img src={filterV_1} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="filterV_2"
              className={clsx("w-1/3", currentToolId === "filterV_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterV_2")}>
              <img src={filterV_2} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title=""
              className={clsx("w-1/3", currentToolId === "filterV_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterV_3")}>
              <img src={filterV_3} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="filterV_4"
              className={clsx("w-1/3", currentToolId === "filterV_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterV_4")}>
              <img src={filterV_4} className="h-6" />
            </Button>
            </div>

          <div>
            <Button
              variant={"ghost"}
              title="filterV_5"
              className={clsx("w-1/3", currentToolId === "filterV_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterV_5")}>
              <img src={filterV_5} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="heatingCoilv_1"
              className={clsx("w-1/3", currentToolId === "heatingCoilv_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv_1")}>
              <img src={heatingCoilv_1} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="heatingCoilv_2"
              className={clsx("w-1/3", currentToolId === "heatingCoilv_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv_2")}>
              <img src={heatingCoilv_2} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="heatingCoilv_3"
              className={clsx("w-1/3", currentToolId === "heatingCoilv_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv_3")}>
              <img src={heatingCoilv_3} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="heatingCoilv_4"
              className={clsx("w-1/3", currentToolId === "heatingCoilv_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv_4")}>
              <img src={heatingCoilv_4} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="heatingCoilv_5"
              className={clsx("w-1/3", currentToolId === "heatingCoilv_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv_5")}>
              <img src={heatingCoilv_5} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="heatingCoilv2w_1"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2w_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2w_1")}>
              <img src={heatingCoilv2w_1} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="heatingCoilv2w_2"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2w_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2w_2")}>
              <img src={heatingCoilv2w_2} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="heatingCoilv2w_3"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2w_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2w_3")}>
              <img src={heatingCoilv2w_3} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="heatingCoilv2w_4"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2w_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2w_4")}>
              <img src={heatingCoilv2w_4} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="heatingCoilv2w_5"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2w_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2w_5")}>
              <img src={heatingCoilv2w_5} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="heatingCoilv2wFalse"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2wFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2wFalse")}>
              <img src={heatingCoilv2wFalse} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="heatingCoilv2wTrue"
              className={clsx("w-1/3", currentToolId === "heatingCoilv2wTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilv2wTrue")}>
              <img src={heatingCoilv2wTrue} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="heatingCoilv2wTrueBack"
              className={clsx(
                "w-1/3",
                currentToolId === "heatingCoilv2wTrueBack" ? "bg-white" : ""
              )}
              onClick={() => editor?.setCurrentTool("heatingCoilv2wTrueBack")}>
              <img src={heatingCoilv2wTrueBack} className="h-6" />
            </Button>

            <Button
              variant={"ghost"}
              title="heatingCoilvFalse"
              className={clsx("w-1/3", currentToolId === "heatingCoilvFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilvFalse")}>
              <img src={heatingCoilvFalse} className="h-6" />
            </Button>
            </div>
          <div>
            <Button
              variant={"ghost"}
              title="heatingCoilvTrue"
              className={clsx("w-1/3", currentToolId === "heatingCoilvTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("heatingCoilvTrue")}>
              <img src={heatingCoilvTrue} className="h-6" />
            </Button>
          
            <Button
              variant={"ghost"}
              title="coolingTowerFalse"
              className={clsx("w-1/3", currentToolId === "coolingTowerFalse" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingTowerFalse")}>
              <img src={coolingTowerFalse} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="coolingTowerTrue"
              className={clsx("w-1/3", currentToolId === "coolingTowerTrue" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("coolingTowerTrue")}>
              <img src={coolingTowerTrue} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="filterH_1"
              className={clsx("w-1/3", currentToolId === "filterH_1" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterH_1")}>
              <img src={filterH_1} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="filterH_2"
              className={clsx("w-1/3", currentToolId === "filterH_2" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterH_2")}>
              <img src={filterH_2} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="filterH_3"
              className={clsx("w-1/3", currentToolId === "filterH_3" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterH_3")}>
              <img src={filterH_3} className="h-6" />
            </Button>
            <Button
              variant={"ghost"}
              title="filterH_4"
              className={clsx("w-1/3", currentToolId === "filterH_4" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterH_4")}>
              <img src={filterH_4} className="h-6" />
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              title="filterH_5"
              className={clsx("w-1/3", currentToolId === "filterH_5" ? "bg-white" : "")}
              onClick={() => editor?.setCurrentTool("filterH_5")}>
              <img src={filterH_5} className="h-6" />
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}
