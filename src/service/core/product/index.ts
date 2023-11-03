import { ProductDML } from "../../../dml/product_dml";
import { Product } from "../../../interfaces/models";
import { AddProductReq, GetProductByIdReq, UpdateProductReq, DeleteProductReq, FilterReq } from "./types";

async function getAllProducts(): Promise<Array<Product>> {
    return ProductDML.getAllProducts()
}

async function getProductById(params: GetProductByIdReq): Promise<Product> {
    return ProductDML.getProductById(params.productId)
}

async function addProduct(params: AddProductReq) {
    return ProductDML.addProduct(params.data)
}

async function updateProduct(params: UpdateProductReq) {
    return ProductDML.updateProduct(params.productId, params.data)
}

async function deleteProductById(params: DeleteProductReq){
    return ProductDML.deleteProductById(params.productId)
}

async function getFilteredProducts(params: FilterReq): Promise<Product[]> {
    return ProductDML.getFilteredProducts(params);
}


export const ProductService = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProductById,
    getFilteredProducts    
}