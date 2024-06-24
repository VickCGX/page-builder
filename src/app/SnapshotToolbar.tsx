import { useAtom } from "jotai";
import { useCallback } from "react";
import { useEditor, exportToBlob, TLShapeId } from "tldraw";

import { sharedImage } from "@/atoms/ShareImage";

const SnapshotToolbar = () => {
  const editor = useEditor();
  const [, setCurrentImage] = useAtom(sharedImage);

  // functions
  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.onloadend = () => res(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  const handleSave = useCallback(async () => {
    const listShapes = document.querySelectorAll(".tl-shape");
    const ids: TLShapeId[] = [];

    if (listShapes?.length > 0) {
      for (const shape of listShapes) {
        if (shape?.childNodes?.length > 0) {
          const shapeElement = shape.childNodes[0] as HTMLDivElement;
          const shapeId = shapeElement.getAttribute("id");
          if (shapeId) {
            ids.push(shapeId as TLShapeId);
          }
        }
      }
    }

    const imgBlob = await exportToBlob({
      editor,
      ids,
      format: "png",
    });

    const imgUrl = await convertBlobToBase64(imgBlob);
    setCurrentImage(imgUrl as string);
  }, [editor]);

  return (
    <div
      style={{
        padding: 20,
        pointerEvents: "all",
        display: "flex",
        gap: "10px",
      }}
    >
      <button className="text-white" onClick={handleSave}>
        Save Snapshot
      </button>
    </div>
  );
};

export default SnapshotToolbar;
