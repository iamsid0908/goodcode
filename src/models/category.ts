"use strict";
import mongoose, { Schema } from 'mongoose';

import { DEFAULT_PAGE_ORDER } from '../common/utils/constants';
import { Category } from '../interfaces/models';

const CategorySchema = new Schema<Category>({
  name : {
    type: String, 
    required: true, 
    unique: true 
  },
  description : {type: String},
  images: {
    banner: { type: String },
    icon: { type: String }
  },
  pageOrder:  {type: Number, required: true, default: DEFAULT_PAGE_ORDER}
})

const CategoryModel = mongoose.model('category', CategorySchema);

export default CategoryModel;