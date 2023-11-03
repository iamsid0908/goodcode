import { Product } from "../../../interfaces/models";
import { MetalPurity } from "../../../interfaces/enums";

export type GetProductByIdReq = {
    productId: string;
}

export type AddProductReq = {
    data: Product
}

export type UpdateProductReq = {
    productId: string;
    data: Partial<Product>;
}

export type DeleteProductReq = {
    productId: string;
}

export type FilterReq = {
    categoryName?: string;
    subCategoryIDs?: string[];
    gender?: string[];
    stones?: string[];
    gemstoneType?: string[];
    collectionIDs?: string[];
    occasions?: string[];
    metalPurities?: MetalPurity[];
    stoneShape?: string[];
    metalType?: string;
    metalColors?: string[];
}

