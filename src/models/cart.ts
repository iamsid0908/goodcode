"use strict";
import mongoose, { Schema } from 'mongoose';

const CartSchema = new Schema({
  products : {type: Object},
  shippingAddress : {type: Object},
  billingAddress: {type: Object},
  aadharNumber:  {type: String},
  giftingContext : {type: Object},
  specialInstructions : {type: Object},
  cartStatus : {type: String}
})

const CartModel = mongoose.model('Cart', CartSchema);

export default CartModel;