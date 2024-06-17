import { db } from "../db";

export const saveToDb = async (values: any, svg: string | undefined) => {
  try {
    if (values.category === "new") {
      let cId = await db.categories.add({ categoryName: values.newCategory });
      let gId = await db.groups.add({ categoryId: cId, groupName: values.newGroup });
      await db.images.add({ groupId: gId, name: values.imageName, svg });
    } else {
      const category = await db.categories.get(Number(values.category));
      if (category) {
        if (values.group === "new") {
          let gId = await db.groups.add({ categoryId: category.id, groupName: values.newGroup });
          await db.images.add({ groupId: gId, name: values.imageName, svg });
        } else {
          const group = await db.groups.get(Number(values.group));
          if (group) {
            await db.images.add({ groupId: group.id, name: values.imageName, svg });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await db.categories.delete(id);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (id: number, categoryName: string) => {
  try {
    const category = await db.categories.get(id);
    if (category) {
      await db.categories.update(id, {
        ...category,
        categoryName,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteGroup = async (id: number) => {
  try {
    await db.groups.delete(id);
  } catch (error) {
    console.log(error);
  }
};

export const updateGroup = async (id: number, groupName: string) => {
  try {
    const group = await db.groups.get(id);
    if (group) {
      await db.groups.update(id, {
        ...group,
        groupName,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (id: number) => {
  try {
    await db.images.delete(id);
  } catch (error) {
    console.log(error);
  }
};

export const updateImage = async (id: number, imageName: string) => {
  try {
    const image = await db.images.get(id);
    if (image) {
      await db.images.update(id, {
        ...image,
        name: imageName,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
