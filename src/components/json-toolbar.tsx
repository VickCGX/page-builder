
import { db } from "@/database/db";
import { useLiveQuery } from "dexie-react-hooks";
import JsonToolbarCategory from "./json-toolbar-category";

export default function JsonToolbar() {
  const categories = useLiveQuery(() => db.categories.toArray());
  return (
    <>
      {categories?.map((category, catIndex) => (
        <JsonToolbarCategory catIndex={catIndex} category={category} />
      ))}
    </>
  );
}
