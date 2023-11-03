import { Category } from "../interfaces/models";
import CategoryModel from "../models/category";
import { flattenObject } from "../common/utils/common"

async function getAllCategories(): Promise<Array<Category>> {
    return CategoryModel.find().lean();
}

async function getCategoryById(categoryId: string): Promise<Category> {
    return CategoryModel.findById(categoryId).lean();
}

async function addCategory(categoryData: Category) {
    return CategoryModel.create(categoryData)
}

async function updateCategory(categoryId: string, updateConfig: Partial<Category>) {   
    const updateObj = flattenObject(updateConfig);
    return CategoryModel.findOneAndUpdate(
        { _id: categoryId },
        updateObj,
        { new: true }
    ).lean()
}

export const CategoryDML = {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategory
}