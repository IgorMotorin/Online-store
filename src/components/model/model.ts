// import {IDataProducts} from '../interface/interface';
import { IDataProduct } from '../interface/interface';
import { dataProducts } from './dataProducts';

class Model {
    IdataProduct: IDataProduct[] = dataProducts.products;
    newIdataProduct: IDataProduct[] = this.IdataProduct;
    products: IDataProduct[] = [];

    getFinalData():IDataProduct[] {
        return this.newIdataProduct;
    }

    StartOrResetFilters():IDataProduct[] {
        return (this.newIdataProduct = this.IdataProduct);
    }

    getDataById(idNumb: number):IDataProduct[] {
        return this.newIdataProduct.filter((item) => item.id === idNumb);
    }

    getDataFilterByCategory(category: string[]):void {
        this.newIdataProduct = this.IdataProduct.filter((item) => category.includes(item.category));
    }

    getDataFilterByBrand(brand: string[]):void {
        this.newIdataProduct = this.newIdataProduct.filter((item) => brand.includes(item.brand));
    }

    getDataFilterByBrandOne(brand: string[]):void {
        this.newIdataProduct = this.IdataProduct.filter((item) => brand.includes(item.brand));
    }
    getDataFilterByPrice(priceMin: number, priceMax: number):IDataProduct[] {
        this.newIdataProduct = this.newIdataProduct.filter((item) => item.price >= priceMin && item.price <= priceMax);
        return this.newIdataProduct;
    }
    getDataFilterByPriceOne(priceMin: number, priceMax: number):IDataProduct[] {
        this.newIdataProduct = this.IdataProduct.filter((item) => item.price >= priceMin && item.price <= priceMax);
        return this.newIdataProduct;
    }

    getDataFilterByStock(stockMin: number, stockMax: number):IDataProduct[] {
        this.newIdataProduct = this.newIdataProduct.filter((item) => item.stock >= stockMin && item.stock <= stockMax);
        return this.newIdataProduct;
    }

    getDataFilterByStockOne(stockMin: number, stockMax: number):IDataProduct[] {
        this.newIdataProduct = this.IdataProduct.filter((item) => item.stock >= stockMin && item.stock <= stockMax);
        return this.newIdataProduct;
    }

    getDataFilterBySearch(searched: string):IDataProduct[] {
        return (this.newIdataProduct = this.newIdataProduct.filter(
            (item) =>
                item.title.toUpperCase().includes(searched.toUpperCase()) ||
                item.description.toUpperCase().includes(searched.toUpperCase()) ||
                item.brand.toUpperCase().includes(searched.toUpperCase()) ||
                item.category.toUpperCase().includes(searched.toUpperCase()) ||
                String(item.price).includes(searched) ||
                String(item.discountPercentage).includes(searched) ||
                String(item.rating).includes(searched) ||
                String(item.stock).includes(searched)
        ));
    }
    getDataFilterBySearchOne(searched: string):IDataProduct[] {
        return (this.newIdataProduct = this.IdataProduct.filter(
            (item) =>
                item.title.toUpperCase().includes(searched.toUpperCase()) ||
                item.description.toUpperCase().includes(searched.toUpperCase()) ||
                item.brand.toUpperCase().includes(searched.toUpperCase()) ||
                item.category.toUpperCase().includes(searched.toUpperCase()) ||
                String(item.price).includes(searched) ||
                String(item.discountPercentage).includes(searched) ||
                String(item.rating).includes(searched) ||
                String(item.stock).includes(searched)
        ));
    }

    resetSearch():IDataProduct[] {
        return this.newIdataProduct;
    }

    getDataSortByNameIncrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1));
        return this.newIdataProduct;
    }

    getDataSortByNameDecrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1)).reverse();
        return this.newIdataProduct;
    }

    getDataSortByPriceIncrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.price > b.price ? 1 : -1));
        return this.newIdataProduct;
    }

    getDataSortByPriceDecrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse();
        return this.newIdataProduct;
    }

    getDataSortByRatingIncrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.rating > b.rating ? 1 : -1));
        return this.newIdataProduct;
    }

    getDataSortByRatingDecrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.rating > b.rating ? 1 : -1)).reverse();
        return this.newIdataProduct;
    }

    getDataSortByDiscountIncrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.discountPercentage > b.discountPercentage ? 1 : -1));
        return this.newIdataProduct;
    }

    getDataSortByDiscountDecrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.discountPercentage > b.discountPercentage ? 1 : -1)).reverse();
        return this.newIdataProduct;
    }

    getDataSortByIdIncrease():IDataProduct[] {
        this.newIdataProduct.sort((a, b) => (a.id > b.id ? 1 : -1));
        return this.newIdataProduct;
    }

    getDataByIdForBasket(idNumb: number[]):IDataProduct[] {
        return this.newIdataProduct.filter((item) => {
            for (const i of idNumb) {
                if (item.id === i) return true;
            }
        });
    }
}

export default Model;
