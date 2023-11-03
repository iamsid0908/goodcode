import { Collection } from "../../../interfaces/models"

export type AddCollectionReq = {
    data: Collection
}

export type GetCollectionByIdReq = {
    collectionId: string
}

export type UpdateCollectionReq = {
    collectionId: string;
    data: Partial<Collection>;
}

export type DeleteCollectionReq = {
    collectionId: string;
}