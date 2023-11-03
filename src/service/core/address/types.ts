import { Address } from "../../../interfaces/models";

export type AddAddressReq = {
    data: Address
}

export type GetAddressByIdReq = {
    addressId: string
}

export type UpdateAddressReq = {
    addressId: string,
    data: Partial<Address>;
}

export type DeleteAddressReq = {
    addressId: string
}