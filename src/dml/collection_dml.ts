import { Collection } from "../interfaces/models";
import CollectionModel from "../models/collection";
import { flattenObject } from "../common/utils/common"

async function getAllCollection(): Promise<Array<Collection>> {
    return CollectionModel.find({}).lean();
}

async function addCollection(collectionData: Collection) {
    return CollectionModel.create(collectionData);
}

async function getCollectionById(collectionId: string) {
    return CollectionModel.findById(collectionId).lean();
}

async function updateCollection(collectionId: string, data: Partial<Collection>) {
    const updateObj = flattenObject(data);
    return CollectionModel.findOneAndUpdate(
        {_id:collectionId},
        updateObj,
        {new:true}
        ).lean()
}

async function deleteCollection(collectionId: string) {
    return CollectionModel.findByIdAndRemove({ _id:collectionId }).lean();
}

export const CollectionDML = {
    getAllCollection,
    addCollection,
    getCollectionById,
    updateCollection,
    deleteCollection
}