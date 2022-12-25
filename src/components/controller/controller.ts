import { View } from "../view";
import { Router } from "../router";
import { queryOptions } from "../interface/interface";
import Model from "../model/model";

export class Controller extends Model {   
    
    view: View = new View();
    router: Router;
    query: queryOptions = {};
    

    constructor(router: Router) {
      super();
      
      

        this.router = router;
        this.view.render();
        
    }

    getStartData(){
      // получаем исходный объект без фильтров и сортировок
      this.StartOrResetFilters()
      // отдаем на рендер без фильтров
      
    }


    getDataWithFilters(){
      // получаем объект в соответствии с фильтрами и отдаем на рендер
      if (this.query.category){
        for (const cat of this.query.category) {
          super.getDataFilterByCategory(cat);
        }
      }
      if (this.query.brand){
        for (const bran of this.query.brand) {
          super.getDataFilterByBrand(bran);
        }
      }
      if (this.query.price){
        super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
        }
      if (this.query.stock){
        super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
        }
      if (this.query.sort){
        if (this.query.sort === 'priceUp') { super.getDataSortByPriceIncrease(); }
        if (this.query.sort === 'priceDown') { super.getDataSortByPriceDecrease(); }
        if (this.query.sort === 'ratingUp') { super.getDataSortByRatingIncrease(); }
        if (this.query.sort === 'ratingDown') { super.getDataSortByRatingDecrease(); }
        if (this.query.sort === 'discountUp') { super.getDataSortByDiscountIncrease(); }
        if (this.query.sort === 'discountDown') { super.getDataSortByDiscountDecrease(); }
        }
      if (this.query.search){
        super.getDataFilterBySearch(this.query.search);
        }
        // Сделали объект
        super.getFinalData()
        //отдаем на рендер
    }

      getCart(){
        //Получаем карточку по id:number и 
        super.getDataById(1)
        //отдаем на рендер
      }

      getBasket(){
        //Получаем карзину по массиву id number[]
        super.getDataByIdForBasket([1,2,3])
        //отдаем на рендер
      }


    updateView (url: URL, query: any) {
        console.log("url:", url.href)
        console.log("path:", url.pathname)
        console.log("query:", query)

        
        

        if (url.pathname === '/') {
            this.view.main.settingsMain = "/products";
            this.view.main.reRender();
            this.addEventProducts()
            this.addEventFilters()
            

        } else if (url.pathname.startsWith('/cart')) {                
                this.view.main.settingsMain = "/cart";
                this.view.main.reRender();
        } else if (url.pathname.startsWith('/productDetails')) {            
            this.view.main.settingsMain = "/productDetails";
            this.view.main.reRender();
        } else {         
            this.view.main.settingsMain = "/page404";
            this.view.main.reRender();
      }


      }
    
      
      addEventHeader() {

        (document
            .querySelector('.header_button') as Element)
            .addEventListener('click', (e) => {
                history.pushState(null, 'cart', location.origin + '/cart');
                this.router.readURL();
                this.updateView(this.router.url, this.router.query);
            }); 

            (document
              .querySelector('.header_buttonHome') as Element)
              .addEventListener('click', (e) => {
                  history.pushState(null, 'cart', location.origin);
                  this.router.readURL();
                  this.updateView(this.router.url, this.router.query);
              }); 
      }

    addEventURL() {
    
      window.addEventListener('popstate', (e) => {        
        this.router.readURL();
        this.updateView(this.router.url, this.router.query);        
      });
    }

    addEventProducts() {
      (document
        .querySelectorAll('.card_buttonDetails') as NodeListOf<Element>)
        .forEach(item => item.addEventListener('click', (e) => {
            history.pushState(null, 'productDetails', location.origin + '/productDetails');
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);})
        );
    }

    addEventFilters() {

      // console.log(document.querySelectorAll<Element>('.filters_input')[0])

      (document
        .querySelectorAll('.filters_input') as NodeListOf<HTMLInputElement>)
        .forEach(item => item.addEventListener("input", (e) => {
          console.log((e.target as HTMLInputElement).value);
          console.log((e.target as HTMLInputElement).name);
          const filtersForm = (document.getElementById('filtersForm') as HTMLFormElement).elements;
          const data = (Array.from(filtersForm) as HTMLInputElement[])
                            .filter((item) => !!item.name)
                            .map((element) => {
                              const { name, value } = element
                        
                              return { name, value }
                            })
        
          console.log(data)
          


        
        }));

    }

    // serializeForm(formNode:HTMLFormControlsCollection) {
    //   const { elements } = formNode
    //   const data = Array.from(elements)
    //     .filter((item) => !!item.name)
    //     .map((element) => {
    //       const { name, value } = element
    
    //       return { name, value }
    //     })
    
    //   console.log(data)
    // }



    
    

}