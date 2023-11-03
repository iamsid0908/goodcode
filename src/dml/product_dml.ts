import _ from "lodash";
import { Product } from "../interfaces/models";
import ProductModel from "../models/product";
import { FilterReq } from "../service/core/product/types";
import QueryBuilder from "../common/utils/query_builder";
import { flattenObject } from "../common/utils/common";

async function getAllProducts(): Promise<Array<Product>> {
    return ProductModel.find().lean();
}

async function getProductById(productId: string) :Promise<Product> {
    return ProductModel.findById(productId).lean(); 
}

async function addProduct(productData: Product) {
    return ProductModel.create(productData)
}

async function updateProduct(productId: string, updateConfig: Partial<object>) {
    const updateObj = flattenObject(updateConfig);
    return ProductModel.findOneAndUpdate(
        { _id: productId },
        updateObj,
        { new: true }
    ).lean()
}

async function deleteProductById(productId: string) {
    return ProductModel.findByIdAndRemove(productId).lean();
}

async function getFilteredProducts(filter: FilterReq): Promise<Product[]> {
    const query = QueryBuilder();

    if (!_.isEmpty(filter.categoryName)) {
        query.where("categoryName", filter.categoryName);
    }

    if (!_.isEmpty(filter.subCategoryIDs)) {
        query.in("subCategories", filter.subCategoryIDs);
    }

    if (!_.isEmpty(filter.gender)) {
        query.in("gender", filter.gender);
    }

    if (!_.isEmpty(filter.gemstoneType)) {
        query.in("gemstoneDetails.type", filter.gemstoneType);
    }

    if (!_.isEmpty(filter.collectionIDs)) {
        query.in("collections", filter.collectionIDs);
    }

    if (!_.isEmpty(filter.occasions)) {
        query.in("occasions", filter.occasions);
    }

    if (!_.isEmpty(filter.metalType)) {
        query.where("metalDetails.type", filter.metalType);
    }

    if (!_.isEmpty(filter.stones)) {
        query.in("stones", filter.stones);
    }

    if (!_.isEmpty(filter.metalPurities)) {
        query.and([{
            $or: [
                { "metalDetails.purity": { $in: filter.metalPurities } },
                { "customizations.metal.purityOptions": { $in: filter.metalPurities } }
            ]
        }]);
    }

    if (!_.isEmpty(filter.stoneShape)) {
        query.and([{
            $or: [
                { "gemstoneDetails.shape": { $in: filter.stoneShape } },
                { "diamondDetails.shape": { $in: filter.stoneShape } }
            ]
        }]);
    }

    if (!_.isEmpty(filter.metalColors)) {
        query.and([{
            $or: [
                { "metalDetails.color": { $in: filter.metalColors } },
                { "customizations.metal.colorOptions": { $in: filter.metalColors } }
            ]
        }]);
    }

    return ProductModel.find(query.build()).lean();
}

export const ProductDML = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProductById,
    getFilteredProducts,    
}