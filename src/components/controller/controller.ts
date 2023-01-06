import { View } from "../view";
import { Router } from "../router";
import { IDataProducts, queryOptions, IDataProduct } from "../interface/interface";
import Model from "../model/model";
import noUiSlider from 'nouislider';
import * as islider from '../../nouislider';


export class Controller extends Model {   
    
    view: View;
    router: Router;
    query: queryOptions;
    dataProducts:IDataProduct[];
    

    constructor(router: Router) {
      super();
      this.query = router.query;
      console.log(this.query);
        
        
      if (Object.keys(router.query).length === 0) { 
        this.dataProducts = this.StartOrResetFilters();
      } else {
        this.dataProducts = this.getDataWithFilters();
      }
       
      console.log( this.dataProducts);
        this.view = new View(this);
        
        this.router = router;
        this.view.render();
        
    }

    getStartData(){
      // получаем исходный объект без фильтров и сортировок
      this.StartOrResetFilters()
      // отдаем на рендер без фильтров
      
    }


    getDataWithFilters(){
      console.log(this.query)
      // получаем объект в соответствии с фильтрами и отдаем на рендер
      if (this.query.category){
        console.log(this.query.category)
        super.getDataFilterByCategory(this.query.category);
        // for (const cat of this.query.category) {
        //   console.log(cat)
        //   super.getDataFilterByCategory(cat);
        // }
        if (this.query.brand){
          super.getDataFilterByBrand(this.query.brand);
          // for (const bran of this.query.brand) {
          //   super.getDataFilterByBrand(bran);
          // }
        }
        if (this.query.price){
          super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
          }
        if (this.query.stock){
          super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
          }
        if (this.query.search){
          super.getDataFilterBySearch(this.query.search[0]);
          }


      } else if (this.query.brand) {
        super.getDataFilterByBrandOne(this.query.brand);

        if (this.query.price){
          super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
        }
        if (this.query.stock){
          super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
        }
        if (this.query.search){
          super.getDataFilterBySearch(this.query.search[0]);
        }

      } else if (this.query.price) {
        super.getDataFilterByPriceOne(Number(this.query.price[0]), Number(this.query.price[1]));
        if (this.query.stock){
          super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
        }
        if (this.query.search){
          super.getDataFilterBySearch(this.query.search[0]);
        }

      } else if (this.query.stock) {
        super.getDataFilterByStockOne(Number(this.query.stock[0]), Number(this.query.stock[1]));

        if (this.query.search){
          super.getDataFilterBySearch(this.query.search[0]);
          }
      } else if (this.query.search) {
        super.getDataFilterBySearchOne(this.query.search[0]);
      }
      // if (this.query.brand){
      //   super.getDataFilterByBrand(this.query.brand);
      //   // for (const bran of this.query.brand) {
      //   //   super.getDataFilterByBrand(bran);
      //   // }
      // }
      // if (this.query.price){
      //   super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
      //   } else if (this.query.stock) {
      //     super.getDataFilterByStockOne(Number(this.query.stock[0]), Number(this.query.stock[1]));
      //   }
      // if (this.query.stock){
      //   super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
      //   }


      if (this.query.sort){
        if (this.query.sort[0] === 'price-ascending') { super.getDataSortByPriceIncrease(); }
        if (this.query.sort[0] === 'price-descending') { super.getDataSortByPriceDecrease(); }
        if (this.query.sort[0] === 'rating-ascending') { super.getDataSortByRatingIncrease(); }
        if (this.query.sort[0] === 'rating-descending') { super.getDataSortByRatingDecrease(); }
        if (this.query.sort[0] === 'discount-ascending') { super.getDataSortByDiscountIncrease(); }
        if (this.query.sort[0] === 'discount-descending') { super.getDataSortByDiscountDecrease(); }
        }
      
        // Сделали объект
        return super.getFinalData()
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

            if (Object.keys(this.query).length === 0) { 
              this.dataProducts = this.StartOrResetFilters();
              this.view.main.dataProducts = this.dataProducts;
            } else {
              this.dataProducts = this.getDataWithFilters();
              this.view.main.dataProducts = this.dataProducts;
            }
            this.view.main.update();
            this.addEventProducts();
            this.addEventFilters();
            this.addEventSearch();
            
            

        } else if (url.pathname.startsWith('/cart')) {                
                this.view.main.settingsMain = "/cart";
                this.view.main.update();
        } else if (url.pathname.startsWith('/productDetails')) {            
            this.view.main.settingsMain = "/productDetails";
            this.view.main.update();
        } else {         
            this.view.main.settingsMain = "/page404";
            this.view.main.update();
      }


      }

      updateProducts () {
        this.router.readURL();
        this.query = this.router.query;
        // this.updateView(this.router.url, this.router.query);
        if (Object.keys(this.query).length === 0) { 
          this.dataProducts = this.StartOrResetFilters();
          this.view.main.dataProducts = this.dataProducts;          
        } else {
          this.dataProducts = this.getDataWithFilters();
          this.view.main.dataProducts = this.dataProducts;
        }
        this.view.main.updateProducts();
        this.updateFilter()
      }

      updateFilter() {
        this.view.main.filters.query = this.query;
        this.view.getFilterProps();
        // this.view.main.filters.props = this.view.filterProps;
        this.view.main.filters.update(this.view.filterProps);
        this.addEventFilters()
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
        console.log('popstate !!!') 
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

    addEventSearch() {
      (document
        .querySelectorAll('.filters_input') as NodeListOf<HTMLInputElement>)
        .forEach(item => item.addEventListener("input", (e) => {
          const targetElement = e.target as HTMLInputElement;
          const url = new URL(location.href);
         
        
          if (targetElement.type === "text") {
            const url = new URL(location.href);
            if (targetElement.value) {
              url.searchParams.set(targetElement.name, targetElement.value);
             
            } else { url.searchParams.delete(targetElement.name);}

            history.pushState(null, '', url.href);
            this.updateProducts();
            

          }
                  
        }));

        const searchButton = document.getElementById('button-addon2') as HTMLElement;
        const search = document.getElementById('exampleDataList') as HTMLInputElement;

          searchButton.addEventListener('click', () => {
            const url = new URL(location.href);           
            if (search.value) {
              url.searchParams.set(search.name, search.value);             
            } else { url.searchParams.delete(search.name);}
            history.pushState(null, '', url.href);
            this.updateProducts();
        })


    }

    addEventFilters() {

      // console.log(document.querySelectorAll<Element>('.filters_input')[0])

      (document
        .querySelectorAll('.filters_input') as NodeListOf<HTMLInputElement>)
        .forEach(item => item.addEventListener("input", (e) => {
          const targetElement = e.target as HTMLInputElement;
          const url = new URL(location.href);

          // console.log(targetElement.type);
          // console.log(targetElement.value);
          // console.log(targetElement.name);

          
          if (targetElement.type === "select-one") {
            const url = new URL(location.href);
            url.searchParams.set(targetElement.name, targetElement.value);
            history.pushState(null, '', url.href);
            this.updateProducts();

          }
         
          if (targetElement.type === "checkbox") {
            const urlGet = url.searchParams.get(targetElement.name) as string;
            // console.log('urlget:', urlGet)
            if (targetElement.checked) {
              
              if (urlGet) {
                url.searchParams.set(targetElement.name, `${urlGet},${targetElement.value}`);
              } else {
                url.searchParams.set(targetElement.name, targetElement.value);
              }                            
              
              history.pushState(null, '', url.href);
              this.updateProducts(); 

            } else { 
              if (urlGet) {
                const index = urlGet.split(',').indexOf(targetElement.value);
                const arr = urlGet.split(',');
                arr.splice(index, 1);
                const newQuery = arr.join(',');
                // console.log('newQuery', index, newQuery)
                if (newQuery) {
                  url.searchParams.set(targetElement.name, newQuery);
                } else {
                  url.searchParams.delete(targetElement.name);
                }
                // url.searchParams.set(targetElement.name, newQuery);
              } else {
                url.searchParams.delete(targetElement.name);
              }
              
              history.pushState(null, '', url.href);
              this.updateProducts(); 
            }
          }
          // const url = this.router.url.searchParams.append((e.target as HTMLInputElement).name, (e.target as HTMLInputElement).value);
          // console.log(location.origin, url)
          // history.pushState(null, '', this.router.url);
        
        }));


        const sliderPrice = document.getElementById('slider-price') as islider.target;
          noUiSlider.create(sliderPrice, {
          start: this.query.price ? this.query.price : this.view.filterProps.price,
          connect: true,
          step: 1,          
          range: {
            'min': 0,
            'max': 1800
          },          
          });

          const priceMin = document.getElementById('price-min') as HTMLElement;
          const priceMax = document.getElementById('price-max') as HTMLElement;

          (sliderPrice.noUiSlider as islider.API).on('update', function (values, handle) {
            const value = values[handle] as number;        
            if (handle) {
                priceMax.innerHTML = String(Math.round(value));
            } else {
                priceMin.innerHTML = String(Math.round(value));
            }
          });

          (sliderPrice.noUiSlider as islider.API).on('slide', (values, handle)=> {
            const url = new URL(location.href);
            url.searchParams.set('price', values.map(item=>Math.round(+item)).join(','));
            history.pushState(null, '', url.href);
            this.updateProducts();          
          });

          const sliderStock = document.getElementById('slider-stock') as islider.target;
          noUiSlider.create(sliderStock, {
          start: this.query.stock ? this.query.stock : this.view.filterProps.stock ,
          connect: true,
          step: 1,          
          range: {
            'min': 0,
            'max': 150
          },              
          });

          const stockMin = document.getElementById('stock-min') as HTMLElement;
          const stockMax = document.getElementById('stock-max') as HTMLElement;

        (sliderStock.noUiSlider as islider.API).on('update', function (values, handle) {
            const value = values[handle] as number;        
            if (handle) {
                stockMax.innerHTML = String(Math.round(value));
            } else {
                stockMin.innerHTML = String(Math.round(value));
            }
        });

        (sliderStock.noUiSlider as islider.API).on('slide', (values, handle)=>{
          const url = new URL(location.href);
          url.searchParams.set('stock', values.map(item=>Math.round(+item)).join(','));
          history.pushState(null, '', url.href);    
          this.updateProducts();       
        });


        const filterReset = document.getElementById('filter-reset') as HTMLElement;
        const filterCopy = document.getElementById('filter-copy') as HTMLElement;

        filterReset.addEventListener('click', () => {
          const url = new URL(location.href);
          // console.log(url.href, url.origin)
          if (url.href !== url.origin + '/'){
            history.pushState(null, '', url.origin);
            this.updateProducts(); 
          }
          

        })

        filterCopy.addEventListener('click', () => {
          const url = new URL(location.href);
          filterCopy.classList.add('active');
          filterCopy.innerHTML = 'Copied to clipboard';
          setTimeout(() => {
            navigator.clipboard.writeText(url.href)
          .then(() => {
            filterCopy.classList.remove('active');
            filterCopy.innerHTML = 'Copy link';
          })
          .catch(err => {
            console.log('Something went wrong', err);
          });
          }, 1000); 
        })


        


        const sortView4 = document.getElementById('sort-view4') as HTMLElement;

          sortView4.addEventListener('click', () => {
            const url = new URL(location.href);            
            url.searchParams.set('view', 'card');            
            history.pushState(null, '', url.href);
            this.updateProducts(); 
        })

        const sortView2 = document.getElementById('sort-view2') as HTMLElement;

          sortView2.addEventListener('click', () => {
            const url = new URL(location.href);            
            url.searchParams.set('view', 'line');            
            history.pushState(null, '', url.href);
            this.updateProducts();  
        })

    }

    



    
    

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


