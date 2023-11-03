'use strict';
import mongoose, { Schema } from 'mongoose';
import { AddressSchema } from './address';
import validator from "validator";
import { User } from '../interfaces/models';

const UserSchema = new Schema<User>({
  firstName: { type: String },
  lastName: { type: String },
  email: { 
    type: String,
    unique: true,
    sparse: true,
    validate: [validator.isEmail, "Invalid Email"] 
  },
  phone: {
    countryCode: { type: String },
    number: { type: String }
  },
  gender: { type: String },
  profileImage: { type: String },
  birthday: { type: Date },
  anniversary: { type: Date },
  occupation: { type: String },
  addressList: [AddressSchema],
  wishlist: { type: [String] },
},
{
  timestamps: true
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel