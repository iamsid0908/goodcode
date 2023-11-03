'use strict';

import mongoose, { Schema } from "mongoose";
import { UserRole } from "../interfaces/enums";
import { Account } from "../interfaces/models";

const AccountSchema = new Schema<Account>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPhoneVerified: {
    type: Boolean,
    default: false
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  userRole: {
    type: String,
    enum: Object.keys(UserRole),
    default: UserRole.CUSTOMER
  },
  phone: {
    countryCode: { type: String },
    number: { type: String }
  },
  google: {
    id: { type: String },
    email: { type: String },
    refreshToken: { type: String },
    accessToken: { type: String },
  },
  apple: {
    id: { type: String },
  },
},
{
  timestamps: true
});

const AccountModel = mongoose.model('Account', AccountSchema);

export default AccountModel
