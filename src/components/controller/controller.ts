import { queryOptions } from "../interface/interface";
import Model from "../model/model";


export class Controller extends Model {

  

  constructor(queryOptionsObject: queryOptions){
    super();
    this.category = queryOptionsObject.category;
    this.brand = queryOptionsObject.brand;
    this.price = queryOptionsObject.price;
    this.stock = queryOptionsObject.stock;
    this.sort = queryOptionsObject.sort;
    this.search = queryOptionsObject.search;
    this.viewCard = queryOptionsObject.viewCard;
  }
  
  getStartData(){
    // получаем исходный объект без фильтров и сортировок
    this.StartOrResetFilters()
    // отдаем на рендер без фильтров
    
  }

  getDataWithFilters(){
    // получаем объект в соответствии с фильтрами и отдаем на рендер
    if (this.category){
      for (const cat of this.category) {
        super.getDataFilterByCategory(cat);
      }
    }
    if (this.brand){
      for (const bran of this.brand) {
        super.getDataFilterByBrand(bran);
      }
    }
    if (this.price){
      super.getDataFilterByPrice(Number(this.price[0]), Number(this.price[1]));
      }
    if (this.stock){
      super.getDataFilterByStock(Number(this.stock[0]), Number(this.stock[1]));
      }
    if (this.sort){
      if (this.sort === 'priceUp') { super.getDataSortByPriceIncrease(); }
      if (this.sort === 'priceDown') { super.getDataSortByPriceDecrease(); }
      if (this.sort === 'ratingUp') { super.getDataSortByRatingIncrease(); }
      if (this.sort === 'ratingDown') { super.getDataSortByRatingDecrease(); }
      if (this.sort === 'discountUp') { super.getDataSortByDiscountIncrease(); }
      if (this.sort === 'discountDown') { super.getDataSortByDiscountDecrease(); }
      }
    if (this.search){
      super.getDataFilterBySearch(this.search);
      }
      // Сделали объект
      super.getFinalData()
      //отдаем на рендер
  }
  
  getCart(){
    //Получаем карточку по id и 
    super.getDataById(id)
    //отдаем на рендер
  }
  
  getBasket(){
    //Получаем карзину по массиву id number[]
    super.getDataByIdForBasket(idBasket)
    //отдаем на рендер
  }



}