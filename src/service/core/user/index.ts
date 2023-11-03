import { User } from "../../../interfaces/models"
import { UserDML } from "../../../dml/user_dml"
import { AddUserReq, UpdateUserReq, DeleteUserReq } from "./types";

async function getAllUsers(): Promise<Array<User>> {
    return UserDML.getAllUsers();
}

async function addUser(params: AddUserReq) {
    return UserDML.addUser(params.data);
}

async function updateUser(params: UpdateUserReq) {
    return UserDML.updateUser(params.userIdd, params.data);
}

async function deleteUser(params: DeleteUserReq) {
    return UserDML.deleteUser(params.userIdd);
}

export const UserService = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}