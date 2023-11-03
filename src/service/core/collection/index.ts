import { Collection } from "../../../interfaces/models"
import { CollectionDML } from "../../../dml/collection_dml"
import { GetCollectionByIdReq,UpdateCollectionReq,DeleteCollectionReq,AddCollectionReq } from "./types"

async function getAllCollection(): Promise<Array<Collection>> {
    return CollectionDML.getAllCollection();
}

async function addCollection(params: AddCollectionReq) {
    return CollectionDML.addCollection(params.data);
}

async function getCollectionById(params: GetCollectionByIdReq) {
    return CollectionDML.getCollectionById(params.collectionId);
}

async function updateCollection(params: UpdateCollectionReq) {
    return CollectionDML.updateCollection(params.collectionId, params.data);
}

async function deleteCollection(params: DeleteCollectionReq) {
    return CollectionDML.deleteCollection(params.collectionId);
}

export const CollectionService = {
    getAllCollection,
    addCollection,
    getCollectionById,
    updateCollection,
    deleteCollection
}
