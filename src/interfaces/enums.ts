export enum UserRole {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN"
}

export enum AddressType {
    HOME = "Home",
    OFFICE = "Office"
}

export enum ProductSizeType {
    INCH = "inch",
    ANNA = "anna",
    MM = "mm"
}

export enum MetalType {
    GOLD = "gold",
    PLATINUM = "platinum",
    SILVER = "silver"
}

export enum Stones {
    GEMSTONE = "gemstone",
    DIAMOND = "diamond"
}

export enum MetalColor {
    YELLOW = "yellow",
    WHITE = "white",
    ROSE = "rose"
}

export enum GoldPurity {
    FOURTEEN = "14KT",
    EIGHTEEN = "18KT",
    TWENTY_TWO = "22KT"
}

export const MetalPurity = { ...GoldPurity }
export type MetalPurity = GoldPurity;