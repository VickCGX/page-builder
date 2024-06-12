import { Editor, Tldraw, createTLStore, defaultShapeUtils } from "tldraw";

import { uiOverrides } from "./tldraw/ui-overrides";
import "tldraw/tldraw.css";
import { useState } from "react";
import { customAssetUrls } from "./tldraw/ui-asset-urls";
import { customShapes, customTools } from "./tldraw/ui-custom-tool";
import ExternalToolbar from "./tldraw/external-toolbar";

export default function TLDrawDemo() {
  const [editor, setEditor] = useState<Editor | null>(null);
  // [2]
  const handleMount = (editor: Editor) => {
    editor.user.updateUserPreferences({ isSnapMode: true });
    editor.updateInstanceState({ isGridMode: true });
    setEditor(editor);
  };

  // [3]
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <div className="flex flex-row">
        <div className="bg-gray-300 w-1/6">
          <ExternalToolbar editor={editor} />
        </div>
        <div className="flex-1 h-screen w-5/6">
          <Tldraw
            //[a]
            shapeUtils={customShapes}
            tools={customTools}
            // [b]
            overrides={uiOverrides}
            // [c]
            onMount={handleMount}
            assetUrls={customAssetUrls}
          />
        </div>
      </div>
    </div>
  );
}
