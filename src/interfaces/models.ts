import { Types } from "mongoose";
import { MetalColor, MetalPurity, MetalType, ProductSizeType, Stones } from "./enums";

export interface User extends Timestamps{
    _id?: Types.ObjectId;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: {
        countryCode: string;
        number: string;
    };
    gender?: string;
    profileImage?: string;
    addressList?: Array<Address>;
    anniversary?: Date;
    birthday?: Date;
    occupation: string;
    wishlist?: Array<String>
    active: boolean;
}

export interface Account extends Timestamps {
    _id?: Types.ObjectId;
    user?: Types.ObjectId;
    isPhoneVerified: boolean;
    isEmailVerified: boolean;
    userRole: string;
    google?: {
        id: string;
        email?: string;
        refreshToken?: string;
        accessToken: string;
    };
    apple?: {
        id: string;
    };
    phone?: {
        countryCode: string;
        number: string;
    };
    active: boolean;
}

export interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
    location?: {
        lat: number;
        long: number;
    };
    name?: string;
    phoneNumber?: string;
    type: string;
}

export interface Category {
    _id?: Types.ObjectId;
    name: string;
    description?: string;
    images?: {
        banner?: string;
        icon?: string;
    };
    pageOrder: number;
}

export interface SubCategory {
    _id: Types.ObjectId;
    categoryId: Types.ObjectId;
    name: string;
    description?: string;
    images?: {
        icon?: string;
    };
    pageOrder: number;
}

export interface Product {
    _id?: Types.ObjectId;
    code: string;
    name: string;
    description: string;
    categoryId: Types.ObjectId;
    categoryName: string;
    subCategories: Array<Types.ObjectId>;
    media?: {
        primaryImage: string;
        images?: Array<string>;
        videos?: Array<string>;
    };
    details: {
        width: number;
        height: number;
        totalWeight: number;
    };
    occasions: Array<string>;
    collections: Array<Types.ObjectId>;
    gender: Array<string>;
    metalDetails: ProductMetalDetails;
    makingCharges: number;
    stones: Array<Stones>;
    diamondDetails: Array<ProductDiamondDetails>;
    gemstoneDetails: Array<ProductGemstoneDetails>;
    customizations?: ProductCustomizationOptions;
    estimatedMakingDays: number;
    tags: Array<string>;
}

export type ProductMetalDetails = {
    type: MetalType;
    color?: MetalColor;
    purity?: MetalPurity;
    weight: number;
}

export type ProductDiamondDetails = {
    quality: string;
    shape: string;
    setting: string;
    size: string;
    count: number;
    weight: number;
}

export type ProductGemstoneDetails = {
    type: string;
    color: string;
    count: number;
    shape: string;
    weight: number;
}

export type ProductCustomizationOptions = {
    isCustomizable: boolean;
    size: {
        enabled: boolean;
        sizeOptions?: Array<number>;
        sizeType?: ProductSizeType;
        defaultSize?: number;
        sizeToWeightDelta?: number;
    }
    metal: {
        enabled: boolean;
        defaultColor?: MetalColor;
        defaultPurity?: MetalPurity;
        colorOptions?: Array<MetalColor>
        purityOptions?: Array<MetalPurity>;
        makingCharges?: Record<MetalColor, number>;
    }
    diamond: {
        enabled: boolean;
        defaultQuality?: string;
        qualityOptions?: Array<string>;
    }
}

export interface Collection {
    _id: Types.ObjectId;
    name: string;
    description?: string;
    images?: {
        icon?: string;
        banner?: string;
    }
}



