import { IGroup } from "@/database/db";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { cn } from "@/lib/utils";
import JsonToolbarItem from "./json-toolbar-item";

interface JsonToolbarGroupProps {
  group: IGroup;
  catIndex: number;
  groupIndex: number;
  totalGroup: number;
}

export default function JsonToolbarGroup({
  group,
  catIndex,
  groupIndex,
  totalGroup,
}: JsonToolbarGroupProps) {
  return (
    <AccordionItem
      value={`item-${catIndex}-${groupIndex}`}
      key={group.groupName}
      className={cn(groupIndex === totalGroup - 1 && "border-none")}>
      <AccordionTrigger className="p-2">{group.groupName}</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-row gap-2 flex-wrap pl-3 pt-3">
          {group.items.map((item) => (
            <JsonToolbarItem item={item} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
