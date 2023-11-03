import { Category } from "../../../interfaces/models";

export type GetCategoryByIdReq = {
    categoryId: string;
}

export type AddCategoryReq = {
    data: Category
}

export type UpdateCategoryReq = {
    categoryId: string;
    data: Partial<Category>;
}