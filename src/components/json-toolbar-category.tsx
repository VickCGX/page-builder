import { ICategory, db } from "@/database/db";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import JsonToolbarGroup from "./json-toolbar-group";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { deleteCategory } from "@/database/repositories/categories";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { useLiveQuery } from "dexie-react-hooks";

interface JsonToolbarCategoryProps {
  category: ICategory;
}

export default function JsonToolbarCategory({ category }: JsonToolbarCategoryProps) {
  const groups = useLiveQuery(() => db.groups.where("categoryId").equals(category.id).toArray());
  const dispatchFuncs = new DispatchFunctions();
  const handleEdit = () => {
    dispatchFuncs.setOpenUpdateCategory(true);
    dispatchFuncs.selectCategory(category);
  };
  const handleDelete = async () => {
    if (confirm(`Are you sure want to delete category '${category.categoryName}'?`)) {
      await deleteCategory(category.id);
    }
  };
  return (
    <AccordionItem value={`item-${category.id + 2}`} key={category.categoryName}>
      <AccordionTrigger className="p-2">
        <ContextMenu>
          <ContextMenuTrigger>{category.categoryName}</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
            <ContextMenuItem onClick={handleDelete}>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pl-2">
          <Accordion type="single" collapsible>
            {groups && groups.map((group, groupIndex) => (
              <JsonToolbarGroup
                group={group}
                groupIndex={groupIndex}
                totalGroup={groups.length}
              />
            ))}
          </Accordion>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
