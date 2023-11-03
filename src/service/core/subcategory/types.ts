import { SubCategory } from '../../../interfaces/models'

export type GetSubCategoryByIdReq = {
    subcategoryId: string
}

export type AddSubCategoryReq = {
    data: SubCategory;
}

export type UpdateSubCategoryReq = {
    subcategoryId: string;
    updateConfig: Partial<SubCategory>
}

export type DeleteSubCategoryReq = {
    subcategoryId: string;
}
