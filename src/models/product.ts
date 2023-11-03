'use strict';
import mongoose, { Schema } from 'mongoose';
import { ProductSizeType } from '../interfaces/enums';
import { Product } from '../interfaces/models';

const ProductSchema = new Schema<Product>({
  code: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  media: {
    primaryImage: { type: String },
    images: {
      type: [String]
    },
    videos: {
      type: [String]
    }
  },
  categoryId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category' 
  },
  categoryName: { type: String },
  subCategories: { type: [mongoose.Schema.Types.ObjectId], ref: 'SubCategory' },
  details: {
    totalWeight: { 
      type: Number, 
      required: true 
    },
    height: { type: Number },
    width: { type: Number },
  },
  occasions: { 
    type: [String] 
  },
  collections: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Collection' 
  },
  gender: { 
    type: [String] 
  },
  metalDetails: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
    },
    purity: {
      type: String,
    },
    weight: {
      type: Number,
      required: true
    },
  },
  makingCharges: {
    type: Number
  },
  stones: { 
    type: [String] 
  },
  diamondDetails: [
    {
      quality: { type: String },
      shape: { type: String },
      setting: { type: String },
      size: { type: String },
      count: { type: Number },
      weight: { type: Number },
    },
  ],
  gemstoneDetails: [
    {
      type: { type: String },
      color: { type: String },
      count: { type: Number },
      shape: { type: String },
      weight: { type: Number },
    },
  ],
  customizations: {
    isCustomizable: {
      type: Boolean,
      default: false
    },
    size: {
      enabled: { type: Boolean, default: false },
      sizeOptions: { type: [Number] },
      sizeType: { type: String, enum: Object.values(ProductSizeType) },
      defaultSize: { type: Number },
      sizeToWeightDelta: { type: Number },
  
    },
    metal: {
      enabled: { type: Boolean, default: false },
      defaultColor: { type: String },
      defaultPurity: { type: String },
      colorOptions: {
        type: [String],
      },
      purityOptions: {
        type: [String],
      },
      makingCharges: {
        yellow: {
          type: Number,
        },
        white: {
          type: Number,
        },
        rose: {
          type: Number,
        },
      }
    },
    diamond: {
      enabled: { type: Boolean, default: false },
      defaultQuality: { type: String },
      qualityOptions: {
        type: [String],
      },
    }
  },
  estimatedMakingDays: { type: Number },
  tags: { type: [String] },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
