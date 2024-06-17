import { ICategory, IGroup, IImage } from "@/database/db";

export interface IDrawingState {
  bgColor: string;
  openUpdateCategory: boolean;
  openUpdateGroup: boolean;
  openUpdateImage: boolean;
  selectedCategory?: ICategory;
  selectedGroup?: IGroup;
  selectedImage?: IImage;
}

export const initState: IDrawingState = {
  bgColor: "default",
  openUpdateCategory: false,
  openUpdateGroup: false,
  openUpdateImage: false,
};
