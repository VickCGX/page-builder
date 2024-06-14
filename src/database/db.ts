import Dexie, { type EntityTable } from 'dexie';
import ImageToolbars from "@/image-toolbars.json";

interface ICategory {
  id: number;
  categoryName: string;
  groups: IGroup[];
}

interface IGroup {
  groupName: string;
  items: IImage[];
}

interface IImage {
  name: string;
  imageUrl?: string;
  svg?: string;
}

const db = new Dexie('DrawingDatabase') as Dexie & {
  categories: EntityTable<
  ICategory,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  categories: '++id, categoryName, groups' // primary key "id" (for the runtime!)
});
const count = await db.categories.count();
if(count === 0){
  db.categories.bulkAdd(ImageToolbars as ICategory[]);
}

export type { ICategory, IGroup, IImage };
export { db };