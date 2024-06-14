import { IImage } from "@/database/db";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface JsonToolbarItemProps {
  item: IImage;
}

export default function JsonToolbarItem({ item }: JsonToolbarItemProps) {
  return (
    <div
      className={cn("w-1/5  hover:bg-white flex justify-center rounded-md",
        item.imageUrl && "p-2 pl-3 pr-3"
      )}
      key={item.name}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {item.imageUrl && <img src={item.imageUrl} className="max-h-6 max-w-full" alt="" />}
            {item.svg && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`} />}
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
