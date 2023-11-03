import { SubCategoryDML } from "../../../dml/subcategory_dml"
import { SubCategory } from "../../../interfaces/models"
import { AddSubCategoryReq,GetSubCategoryByIdReq ,UpdateSubCategoryReq,DeleteSubCategoryReq} from "./types";

async function getAllSubcategory(): Promise<Array<SubCategory>> {
    return SubCategoryDML.getAllSubcategory();
}

async function addSubCategory(params: AddSubCategoryReq) {
    return SubCategoryDML.addSubCategory(params.data);
}

async function getSubCategoryById(params: GetSubCategoryByIdReq) {
    return SubCategoryDML.getSubCategoryById(params.subcategoryId);
}

async function updateSubCategory(params: UpdateSubCategoryReq) {
    return SubCategoryDML.updateSubCategory(params.subcategoryId, params.updateConfig)
}

async function deleteSubCategoryById(params: DeleteSubCategoryReq) {
    return SubCategoryDML.deleteSubCategoryById(params.subcategoryId);
}

export const SubcategoryService = {
    getAllSubcategory,
    addSubCategory,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategoryById
}