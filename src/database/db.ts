import Dexie, { type EntityTable } from "dexie";
import ImageToolbars from "@/image-toolbars.json";

interface ICategory {
  id: number;
  categoryName: string;
}

interface IGroup {
  id: number;
  categoryId: number;
  groupName: string;
}

interface IImage {
  id: number;
  groupId: number;
  name: string;
  imageUrl?: string;
  svg?: string;
}

const db = new Dexie("DrawingDatabase") as Dexie & {
  categories: EntityTable<
    ICategory,
    "id" // primary key "id" (for the typings only)
  >;
  groups: EntityTable<
    IGroup,
    "id" // primary key "id" (for the typings only)
  >;
  images: EntityTable<
    IImage,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  categories: "++id, categoryName", // primary key "id" (for the runtime!)
  groups: "++id, categoryId, groupName", // primary key "id" (for the runtime!)
  images: "++id, groupId, name, imageUrl, svg", // primary key "id" (for the runtime!)
});

//seed data from json
const countCategories = await db.categories.count();
if (countCategories === 0) {
  ImageToolbars.forEach(async (category) => {
    let cId = await db.categories.add({ categoryName: category.categoryName });
    category.groups.forEach(async (group) => {
      let gId = await db.groups.add({ categoryId: cId, groupName: group.groupName });
      group.items.forEach(async (image) => {
        await db.images.add({ groupId: gId, ...image });
      });
    });
  });
}

export type { ICategory, IGroup, IImage };
export { db };
