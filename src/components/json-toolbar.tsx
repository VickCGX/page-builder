
import { db } from "@/database/db";
import { useLiveQuery } from "dexie-react-hooks";
import JsonToolbarCategory from "./json-toolbar-category";
import UpdateCategoryDialog from "./update-category-dialog";
import UpdateGroupDialog from "./update-group-dialog";
import UpdateImageDialog from "./update-image-dialog";

export default function JsonToolbar() {
  const categories = useLiveQuery(() => db.categories.toArray());
  return (
    <>
      {categories?.map((category) => (
        <JsonToolbarCategory category={category} />
      ))}
      <UpdateCategoryDialog />
      <UpdateGroupDialog />
      <UpdateImageDialog />
    </>
  );
}
