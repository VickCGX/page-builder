import { db } from "../db";

export const saveToDb = async (values: any, svg: string | undefined) => {
  try {
    if (values.category === "new") {
      await db.categories.add({
        categoryName: values.newCategory,
        groups: [
          {
            groupName: values.newGroup,
            items: [
              {
                name: values.imageName,
                svg,
              },
            ],
          },
        ],
      });
    } else {
      const category = await db.categories.get(Number(values.category));
      if (category) {
        if (values.group === "new") {
          await db.categories.update(category!.id, {
            ...category,
            groups: [
              ...category.groups, //other groups
              //add new group
              {
                groupName: values.newGroup,
                items: [
                  {
                    name: values.imageName,
                    svg,
                  },
                ],
              },
            ],
          });
        } else {
          const group = category.groups.find((g) => g.groupName === values.group);
          const otherGroups = category.groups.filter((g) => g.groupName !== values.group);
          if (group) {
            await db.categories.update(category!.id, {
              ...category,
              groups: [
                ...otherGroups,
                {
                  ...group,
                  items: [
                    ...group.items, //other items
                    //add new item
                    {
                      name: values.imageName,
                      svg,
                    },
                  ],
                },
              ],
            });
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

export const deleteGroup = async (categoryId: number, groupName: string) => {
  try {
    const category = await db.categories.get(categoryId);
    if (category) {
      const groups = category.groups.filter((g) => g.groupName !== groupName);
      await db.categories.update(categoryId, {
        ...category,
        groups,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateGroup = async (categoryId: number, groupName: string, newGroupName: string) => {
  try {
    const category = await db.categories.get(categoryId);
    if (category) {
      const group = category.groups.find((g) => g.groupName === groupName);
      if (group) {
        const otherGroups = category.groups.filter((g) => g.groupName !== groupName);
        await db.categories.update(categoryId, {
          ...category,
          groups: [
            ...otherGroups,
            {
              ...group,
              groupName: newGroupName,
            },
          ],
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (categoryId: number, groupName: string, imageName: string) => {
  try {
    const category = await db.categories.get(categoryId);
    if (category) {
      const group = category.groups.find((g) => g.groupName === groupName);
      if (group) {
        const otherGroups = category.groups.filter((g) => g.groupName !== groupName);
        const otherItems = group.items.filter((i) => i.name !== imageName);
        await db.categories.update(categoryId, {
          ...category,
          groups: [
            ...otherGroups,
            {
              ...group,
              items: [...otherItems],
            },
          ],
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateImage = async (
  categoryId: number,
  groupName: string,
  imageName: string,
  newImageName: string
) => {
  try {
    const category = await db.categories.get(categoryId);
    if (category) {
      const group = category.groups.find((g) => g.groupName === groupName);
      if (group) {
        const otherGroups = category.groups.filter((g) => g.groupName !== groupName);
        const item = group.items.find((i) => i.name === imageName);
        const otherItems = group.items.filter((i) => i.name !== imageName);
        if (item) {
          await db.categories.update(categoryId, {
            ...category,
            groups: [
              ...otherGroups,
              {
                ...group,
                items: [
                  ...otherItems,
                  {
                    ...item,
                    name: newImageName,
                  },
                ],
              },
            ],
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
