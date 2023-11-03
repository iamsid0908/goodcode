import { User } from "../../../interfaces/models";

export type AddUserReq = {
    data: User
}

export type UpdateUserReq = {
    userIdd: string,
    data: Partial<User>
}

export type DeleteUserReq = {
    userIdd: string
}

