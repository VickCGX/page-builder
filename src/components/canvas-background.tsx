import { useDrawingContext } from "@/context/store"

export function CanvasBackground() {
    const drawingContext = useDrawingContext();
    if(drawingContext?.bgColor === "default"){
        return <div className="tl-background" />
    }
	return <div style={{backgroundColor: drawingContext?.bgColor}} className="w-full h-full" />
}