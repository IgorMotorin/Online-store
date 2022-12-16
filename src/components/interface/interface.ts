export interface IDataProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}


export interface IDataProducts {
    products: IDataProduct[];
    total: number;
    skip: number;
    limit: number;    
}


type TCartItem = {
    id: number;
    count: number;
    price: number;
}

export interface ICart {
    items: TCartItem[];
}

type TPromoItem = {
    id: string;
    name: string;
    disc: number;
}

export interface IPromo {
    items: TPromoItem[];
}

export interface IFilters {
    category: string[];
    brand: string[];
    price: number[];       
    stock: number[];    
}

export interface ISort {
    category: string[];
    brand: string[];
    price: number[];       
    stock: number[];    
}


export type TSort = 'priceUp' | 'priceDown' | 'ratingUp' | 'ratingDown' | 'discountUp' | 'discountDown';




