import { IGroup, db } from "@/database/db";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { cn } from "@/lib/utils";
import JsonToolbarItem from "./json-toolbar-item";
import { useLiveQuery } from "dexie-react-hooks";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { deleteGroup } from "@/database/repositories/categories";

interface JsonToolbarGroupProps {
  group: IGroup;
  totalGroup: number;
  groupIndex: number;
}

export default function JsonToolbarGroup({ group, totalGroup, groupIndex }: JsonToolbarGroupProps) {
  const images = useLiveQuery(() => db.images.where("groupId").equals(group.id).toArray());
  const dispatchFuncs = new DispatchFunctions();
  const handleEdit = () => {
    dispatchFuncs.setOpenUpdateGroup(true);
    dispatchFuncs.selectGroup(group);
  };
  const handleDelete = async () => {
    if (confirm(`Are you sure want to delete group '${group.groupName}'?`)) {
      await deleteGroup(group.id);
    }
  };
  return (
    <AccordionItem
      value={`item-${group.categoryId}-${group.id}`}
      key={group.id}
      className={cn(groupIndex === totalGroup - 1 && "border-none")}>
      <AccordionTrigger className="p-2">
        <ContextMenu>
          <ContextMenuTrigger>{group.groupName}</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
            <ContextMenuItem onClick={handleDelete}>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-row gap-2 flex-wrap pl-3 pt-3">
          {images && images.map((item) => <JsonToolbarItem item={item} key={item.id} />)}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
