import { ServiceWrappers } from "../common/utils/service_wrappers";
import { AuthService } from "../service/core/auth";
import { CategoryService } from "../service/core/category";
import { ProductService } from "../service/core/product";
import { AddressService } from "../service/core/address"
import { CollectionService } from "../service/core/collection"
import { SubcategoryService } from "../service/core/subcategory"
import { UserService } from "../service/core/user";

export default {
    auth: { ...ServiceWrappers.wrapApiCollection(AuthService) },
    products: { ...ServiceWrappers.wrapApiCollection(ProductService) },
    category: { ...ServiceWrappers.wrapApiCollection(CategoryService) },
    address: { ...ServiceWrappers.wrapApiCollection(AddressService) },
    collection: { ...ServiceWrappers.wrapApiCollection(CollectionService) },
    subCategory: { ...ServiceWrappers.wrapApiCollection(SubcategoryService) },
    users: { ...ServiceWrappers.wrapApiCollection(UserService) }
}
