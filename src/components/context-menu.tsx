import { useState } from "react";
import {
  DefaultContextMenu,
  DefaultContextMenuContent,
  TLUiContextMenuProps,
  TldrawUiMenuGroup,
  TldrawUiMenuItem,
} from "tldraw";
import SaveToLibraryDialog from "./save-to-library-dialog";

export default function DrawingContextMenu(props: TLUiContextMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <DefaultContextMenu {...props}>
        <TldrawUiMenuGroup id="example">
          <div>
            <TldrawUiMenuItem
              id="saveToLibrary"
              label="Save to my library"
              onSelect={() => setOpen(true)}
            />
          </div>
        </TldrawUiMenuGroup>
        <DefaultContextMenuContent />
      </DefaultContextMenu>
      <SaveToLibraryDialog open={open} setOpen={setOpen} />
    </>
  );
}
