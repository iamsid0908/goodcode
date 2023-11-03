import { AddressDML } from "../../../dml/address_dml"
import { Address } from "../../../interfaces/models"
import { AddAddressReq ,GetAddressByIdReq,UpdateAddressReq,DeleteAddressReq } from "./types";

async function getAllAddress(): Promise<Array<Address>> {
    return AddressDML.getAllAddress();
}

async function createAddress(params: AddAddressReq) {
    return AddressDML.createAddress(params.data);
}

async function getAddressById(params: GetAddressByIdReq) {
    return AddressDML.getAddressById(params.addressId);
}

async function updateAdrress(params: UpdateAddressReq) {
    return AddressDML.updateAdrress(params.addressId, params.data);
}

async function deleteAddress(params: DeleteAddressReq) {
    return AddressDML.deleteAddress(params.addressId);
}

export const AddressService = {
    getAllAddress,
    createAddress,getAddressById,
    updateAdrress,
    deleteAddress
}