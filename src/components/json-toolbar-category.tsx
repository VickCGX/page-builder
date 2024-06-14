import { ICategory } from "@/database/db";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import JsonToolbarGroup from "./json-toolbar-group";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { deleteCategory } from "@/database/repositories/categories";

interface JsonToolbarCategoryProps {
  category: ICategory;
  catIndex: number;
}

export default function JsonToolbarCategory({ category, catIndex }: JsonToolbarCategoryProps) {
  const handleEdit = () => {};
  const handleDelete = async () => {
    if (confirm(`Are you sure want to delete category '${category.categoryName}'?`)) {
      await deleteCategory(category.id);
    }
  };
  return (
    <AccordionItem value={`item-${catIndex + 2}`} key={category.categoryName}>
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
            {category.groups.map((group, groupIndex) => (
              <JsonToolbarGroup
                group={group}
                groupIndex={groupIndex}
                catIndex={catIndex}
                totalGroup={category.groups.length}
              />
            ))}
          </Accordion>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
