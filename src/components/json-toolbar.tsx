import ImageToolbars from "@/image-toolbars.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function JsonToolbar() {
  return (
    <>
      {ImageToolbars.map((category, catIndex) => (
        <AccordionItem value={`item-${catIndex + 2}`} key={category.categoryName}>
          <AccordionTrigger className="p-2">{category.categoryName}</AccordionTrigger>
          <AccordionContent>
            <div className="pl-2">
              <Accordion type="single" collapsible>
                {category.groups.map((group, groupIndex) => (
                  <AccordionItem value={`item-${catIndex}-${groupIndex}`} key={group.groupName}>
                    <AccordionTrigger className="p-2">{group.groupName}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-row gap-2 flex-wrap pl-3 pt-3">
                        {group.items.map((item) => (
                          <div
                            className="w-1/5 p-2 pl-3 pr-3 hover:bg-white flex justify-center rounded-md"
                            key={item.name}>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <img src={item.imageUrl} className="max-h-6 max-w-full" alt="" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="flex flex-col justify-center items-center">
                                    <img src={item.imageUrl} alt="" />
                                    <p className="p-1">{item.name}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
}
