import { SubCategory } from "../interfaces/models"
import SubCategoryModel  from "../models/sub_category"
import { flattenObject } from "../common/utils/common";

async function getAllSubcategory(): Promise<Array<SubCategory>> {
    return SubCategoryModel.find().lean();
}

async function addSubCategory(subCategoryData: SubCategory) {
    return SubCategoryModel.create(subCategoryData);
}

async function getSubCategoryById(subcategoryId: string) {
    return SubCategoryModel.findById(subcategoryId).lean();
}

async function updateSubCategory(subcategoryId: string, updateConfig: Partial<SubCategory>) {
    const updateObj = flattenObject(updateConfig);
    return SubCategoryModel.findOneAndUpdate(
        {_id:subcategoryId},
        updateObj,
        {new:true}
        ).lean();
}

async function deleteSubCategoryById(subcategoryId: string) {
    return SubCategoryModel.findByIdAndRemove(subcategoryId).lean();
}

export const SubCategoryDML = {
    getAllSubcategory,
    addSubCategory,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategoryById
}