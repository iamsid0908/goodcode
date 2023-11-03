'use strict';
import mongoose, { Schema } from 'mongoose';
import { Collection } from '../interfaces/models';

const CollectionSchema = new Schema<Collection>({
  name: { type: String, required: true },
  description: { type: String },
  images: {
    icon: { type: String },
    banner: { type: String }
   },
});

const CollectionModel = mongoose.model('Collection', CollectionSchema);

export default CollectionModel;
