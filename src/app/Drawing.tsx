import { useState } from "react";
import { Editor, TLComponents, Tldraw } from "tldraw";

import { CanvasBackground } from "@/components/canvas-background";

import ExternalToolbar from "@/components/external-toolbar";
import SnapshotToolbar from "./SnapshotToolbar";
import DrawingContextMenu from "@/components/context-menu";

import "tldraw/tldraw.css";

export default function Drawing() {
  const [editor, setEditor] = useState<Editor | null>(null);
  // [2]
  const handleMount = (editor: Editor) => {
    editor.user.updateUserPreferences({ isDarkMode: true });
    editor.updateInstanceState({ isGridMode: false });
    setEditor(editor);
  };

  const components: TLComponents = {
    Background: CanvasBackground,
    ContextMenu: DrawingContextMenu,
    SharePanel: SnapshotToolbar,
  };

  // [3]
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <div className="flex flex-row">
        <div className="bg-gray-300 w-[220px]">
          <ExternalToolbar editor={editor} />
        </div>
        <div className="flex-1 h-screen">
          <Tldraw
            onMount={handleMount}
            persistenceKey="my-persistence-key"
            components={components}
          />
        </div>
      </div>
    </div>
  );
}
