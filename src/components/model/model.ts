// import {IDataProducts} from '../interface/interface';
// import {IDataProduct} from '../interface/interface';
import {dataProducts} from './dataProducts';

class Model {
  IdataProduct = dataProducts.products;
  newIdataProduct = this.IdataProduct;

  start(){
    return this.newIdataProduct = this.IdataProduct;
  }

  getDataFilterByCategory(category?:string){
    return this.newIdataProduct = this.newIdataProduct.filter(item => item.category == category);
     
  }

  getDataFilterByBrand(brand?:string){
    return this.newIdataProduct = this.newIdataProduct.filter(item => item.brand == brand);
     
  }

  getDataFilterByPrice(priceMin?:number, priceMax?:number){
    if (priceMin && priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price >= priceMin && item.price <= priceMax)}
    else if (!priceMin && priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price <= priceMax)}
    else if (priceMin && !priceMax){this.newIdataProduct = this.newIdataProduct.filter(item => item.price >= priceMin)}
    return this.newIdataProduct;
  } 



  getDataFilterByStock(stockMin?:number, stockMax?:number){
    if (stockMin && stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price >= stockMin && item.price <= stockMax)}
    else if (!stockMin && stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price <= stockMax)}
    else if (stockMin && !stockMax){this.newIdataProduct = this.IdataProduct.filter(item => item.price >= stockMin)}
    return this.newIdataProduct
  } 


  getDataSortByNameIncrease(){
    this.newIdataProduct.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1)
    return this.newIdataProduct
  }

  getDataSortByNameDecrease(){
    this.newIdataProduct.sort(((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

  getDataSortByPriceIncrease(){
    this.newIdataProduct.sort(((a, b) => a.price > b.price ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByPriceDecrease(){
    this.newIdataProduct.sort(((a, b) => a.price > b.price ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

  getDataSortByRatingIncrease(){
    this.newIdataProduct.sort(((a, b) => a.rating > b.rating ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByRatingDecrease(){
    this.newIdataProduct.sort(((a, b) => a.rating > b.rating ? 1 : -1)).reverse()
    return this.newIdataProduct
  }
  
  getDataSortByDiscountIncrease(){
    this.newIdataProduct.sort(((a, b) => a.discountPercentage > b.discountPercentage ? 1 : -1))
    return this.newIdataProduct
  }

  getDataSortByDiscountDecrease(){
    this.newIdataProduct.sort(((a, b) => a.discountPercentage > b.discountPercentage ? 1 : -1)).reverse()
    return this.newIdataProduct
  }

}

export default Model