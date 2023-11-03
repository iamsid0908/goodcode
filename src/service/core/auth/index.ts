import admin from "firebase-admin";
import { CreateUserReq } from "./types";
import { InternalServerError, MissingParamError } from "../../../common/constants/errors";

const createUser = async (params: CreateUserReq) => {

  if (!params.email) {
    throw new MissingParamError('email');
  }
  if (!params.password) {
    throw new MissingParamError('password');
  }

  try {
    const userResponse = await admin.auth().createUser({
      email: params.email,
      password: params.password,
      emailVerified: false,
      disabled: false,
    });

    return userResponse;
  } catch(err) {

    throw new InternalServerError({ ...err, status: 400 });
    
  }
  
};

export const AuthService = {
  createUser
}
