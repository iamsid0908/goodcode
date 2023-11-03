import {User} from "../interfaces/models"
import UserModel from "../models/user"
import { flattenObject } from "../common/utils/common";

async function getAllUsers(): Promise<Array<User>> {
    return UserModel.find().lean();
}

async function addUser(userData: User) {
    return UserModel.create(userData);
}

async function updateUser(userId: string, updateConfig: Partial<User>) {
    const updateObj = flattenObject(updateConfig);
    return UserModel.findOneAndUpdate(
        {_id:userId},
        updateObj,
        {new:true}
        ).lean();
}

async function deleteUser(userId: string) {
    return UserModel.findByIdAndRemove(userId).lean();
}

export const UserDML = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
}