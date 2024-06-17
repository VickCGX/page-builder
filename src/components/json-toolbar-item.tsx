import { IImage } from "@/database/db";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "./ui/context-menu";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { deleteImage } from "@/database/repositories/categories";

interface JsonToolbarItemProps {
  item: IImage;
}

export default function JsonToolbarItem({ item }: JsonToolbarItemProps) {
  const dispatchFuncs = new DispatchFunctions();
  const handleEdit = () => {
    dispatchFuncs.setOpenUpdateImage(true);
    dispatchFuncs.selectImage(item);
  };
  const handleDelete = async () => {
    if (confirm(`Are you sure want to delete group '${item.name}'?`)) {
      await deleteImage(item.id);
    }
  };
  return (
    <div
      className={cn("w-1/5  hover:bg-white flex justify-center rounded-md",
        item.imageUrl && "p-2 pl-3 pr-3"
      )}
      key={item.name}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
          <ContextMenu>
          <ContextMenuTrigger>
          {item.imageUrl && <img src={item.imageUrl} className="max-h-6 max-w-full" alt="" />}
          {item.svg && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`} />}
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
            <ContextMenuItem onClick={handleDelete}>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
            
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-col justify-center items-center">
              {item.imageUrl && <img src={item.imageUrl} alt="" />}
              {item.svg && (
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`}
                  className="max-h-20"
                />
              )}
              <p className="p-1">{item.name}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
