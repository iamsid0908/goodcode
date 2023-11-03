import { Address } from "../interfaces/models";
import AddressModel from "../models/address"
import { flattenObject } from "../common/utils/common"

async function getAllAddress(): Promise<Array<Address>> {
    return AddressModel.find().lean();
}

async function createAddress(data: Address): Promise<Address> {
    return AddressModel.create(data);
}

async function getAddressById(addressId: string): Promise<Address> {
    return AddressModel.findById(addressId).lean();
}

async function updateAdrress(addressId: string, updateConfig: Partial<Address>) {
    const updateObj = flattenObject(updateConfig);
    return AddressModel.findOneAndUpdate( 
        {_id:addressId},
        updateObj,
        {new:true}
        ).lean();
}

async function deleteAddress(addressId: string) {
    return AddressModel.findByIdAndRemove(addressId);
}

export const AddressDML = {
    getAllAddress,
    createAddress,
    getAddressById,
    updateAdrress,
    deleteAddress
}
