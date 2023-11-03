'use strict';

import mongoose, { Schema } from "mongoose";
import { Address } from "../interfaces/models";

export const AddressSchema = new Schema<Address>({
  line1: { 
    type: String,
    required: true
  },
  line2: { 
    type: String
  },
  city: { 
    type: String, 
    required: true
  },
  state: { 
    type: String,
    required: true
  },
  zipCode: { 
    type: String
  },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  name: { type: String },
  phoneNumber: { type: String },
  type: { type: String },
});

const AddressModel = mongoose.model('Address', AddressSchema);

export default AddressModel
