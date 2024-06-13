import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BackgroundColors from "@/background-colors.json";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { useDrawingContext } from "@/context/store";

export default function SelectBackgound() {
  const drawingContext = useDrawingContext();
  const dispatchFuncs = new DispatchFunctions();
  return (
    <>
      <label className="font-medium text-sm">Background Color:</label>
      <div className="">
        <Select
          onValueChange={(value) => dispatchFuncs.updateBgColor(value)}
          value={drawingContext?.bgColor}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Background Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            {BackgroundColors.map((item) => (
              <SelectItem value={item.color}>
                <div className="flex flex-row gap-3 h-6 items-center">
                  <div style={{ backgroundColor: item.color }} className="w-4 h-4"></div>
                  <div className="flex-1">{item.name}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
