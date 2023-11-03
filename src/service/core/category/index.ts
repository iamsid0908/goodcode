import { CategoryDML } from "../../../dml/category_dml";
import { Category } from "../../../interfaces/models";
import { AddCategoryReq, GetCategoryByIdReq, UpdateCategoryReq } from "./types";

async function getAllCategories(): Promise<Array<Category>> {
    return CategoryDML.getAllCategories()
}

async function getCategoryById(params: GetCategoryByIdReq): Promise<Category> {
    return CategoryDML.getCategoryById(params.categoryId)
}

async function addCategory(params: AddCategoryReq) {
    return CategoryDML.addCategory(params.data)
}

async function updateCategory(params: UpdateCategoryReq) {
    return CategoryDML.updateCategory(params.categoryId, params.data)
}

export const CategoryService = {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategory
}