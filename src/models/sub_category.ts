"use strict";
import mongoose, { Schema } from 'mongoose';

import { DEFAULT_PAGE_ORDER } from '../common/utils/constants';
import { SubCategory } from '../interfaces/models';

// TODO: Rething image object type

const SubCategorySchema = new Schema<SubCategory>({
  categoryId: {
     type: Schema.Types.ObjectId,
      ref: 'Category' 
    },
  name : {
    type: String,
    required: true
  },
  description : {
    type: String
  },
  images: {
    icon: {
      type: String
    }
  },
  pageOrder: {
    type: Number, required: true,
    default: DEFAULT_PAGE_ORDER
  },
});

const SubCategoryModel = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategoryModel;