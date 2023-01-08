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
        
      if (Object.keys(router.query).length === 0) { 
        this.dataProducts = this.StartOrResetFilters();
      } else {
        this.dataProducts = this.getDataWithFilters();
      }
       
      
      this.view = new View(this);        
      this.router = router;
      this.view.render();        
    }

    getStartData(){     
      this.StartOrResetFilters();      
    }


    getDataWithFilters(){
      if (this.query.category){        
        super.getDataFilterByCategory(this.query.category);        
        if (this.query.brand){
          super.getDataFilterByBrand(this.query.brand);          
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
      
      if (this.query.sort){
        if (this.query.sort[0] === 'Sort by') { super.getDataSortByIdIncrease(); }
        if (this.query.sort[0] === 'price-ascending') { super.getDataSortByPriceIncrease(); }
        if (this.query.sort[0] === 'price-descending') { super.getDataSortByPriceDecrease(); }
        if (this.query.sort[0] === 'rating-ascending') { super.getDataSortByRatingIncrease(); }
        if (this.query.sort[0] === 'rating-descending') { super.getDataSortByRatingDecrease(); }
        if (this.query.sort[0] === 'discount-ascending') { super.getDataSortByDiscountIncrease(); }
        if (this.query.sort[0] === 'discount-descending') { super.getDataSortByDiscountDecrease(); }
        }
      
        
        return super.getFinalData()        
    }

      getCart(id: number){        
        return super.getDataById(id);        
      }

      getBasket(){       
        super.getDataByIdForBasket([1,2,3])        
      }


    updateView (url: URL, query: any) {
        console.log("url:", url.href)
        console.log("path:", url.pathname)
        console.log("query:", query)
      
        this.query = query;        

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
                const obj = this.view.header.getLocalStorage();
                this.view.main.cart.props = super.getDataByIdForBasket(obj.ids);
                this.view.main.cart.propsArr = this.view.main.cart.props;
                this.view.main.update();

        } else if (url.pathname.startsWith('/productDetails')) {            
            this.view.main.settingsMain = "/productDetails";
            console.log(this.query.id)
            if (this.query.id) {
              this.dataProducts = this.getCart(Number(this.query.id[0]));
              this.view.main.dataProducts = this.dataProducts;
              console.log(this.dataProducts)
              this.view.main.update();
              this.addEventCardAddButton();
              this.addEventDetailsBayButton();
            }
            
        } else {         
            this.view.main.settingsMain = "/page404";
            this.view.main.update();
      }


      }

      updateProducts () {
        this.router.readURL();
        this.query = this.router.query;        
        if (Object.keys(this.query).length === 0) { 
          this.dataProducts = this.StartOrResetFilters();
          this.view.main.dataProducts = this.dataProducts;          
        } else {
          this.dataProducts = this.getDataWithFilters();
          this.view.main.dataProducts = this.dataProducts;
        }
        this.view.main.updateProducts(this.query.view);
        this.addEventProducts();
        this.updateFilter();
      }

      updateFilter() {
        this.view.main.filters.query = this.query;
        this.view.getFilterProps();        
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
            const targetElement = e.target as HTMLInputElement;            
            history.pushState(null, 'productDetails', location.origin + '/productDetails' + "?id=" + targetElement.id);
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);})
        );
        this.addEventCardAddButton();
    }

    addEventDetailsBayButton(){      
      (document
        .querySelectorAll('.details_buttonBuy') as NodeListOf<Element>)
        .forEach(item => item.addEventListener('click', (e) => {
            const targetElement = e.target as HTMLInputElement;  
            
            if (localStorage.cart) {
              const cart: {id: string, count: number, price: string}[] = JSON.parse(localStorage.cart)              
              const cartIndex = cart.findIndex(item => item.id === targetElement.id);
              if (cartIndex == -1)  {
                const obj = {
                  id: targetElement.id,
                  count: 1,
                  price: targetElement.getAttribute("price") as string,
                }
                cart.push(obj);                
              }
              localStorage.cart = JSON.stringify(cart);              
            } else {
              const cart = [];
              const obj = {
                id: targetElement.id,
                count: 1,
                price: targetElement.getAttribute("price") as string,
              }
              cart.push(obj);
              localStorage.cart = JSON.stringify(cart); 
            }

            history.pushState(null, 'buyNow', location.origin + '/cart');
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);})
        );
    }

    addEventCardAddButton(){
      (document
        .querySelectorAll('.card_buttonAdd') as NodeListOf<Element>)
        .forEach(item => item.addEventListener('click', (e) => {
            const targetElement = e.target as HTMLInputElement;

            if (localStorage.cart) {
              const cart: {id: string, count: number, price: string}[] = JSON.parse(localStorage.cart)
              console.log(cart)
              const cartIndex = cart.findIndex(item => item.id === targetElement.id);
              if (cartIndex !== -1) {
                cart.splice(cartIndex, 1);
                targetElement.setAttribute("cart", "false")
                  
              } else {
                const obj = {
                  id: targetElement.id,
                  count: 1,
                  price: targetElement.getAttribute("price") as string,
                }
                cart.push(obj);
                targetElement.setAttribute("cart", "true")
              }
              localStorage.cart = JSON.stringify(cart);
              console.log("345", cart)
            } else {
              const cart = [];
              const obj = {
                id: targetElement.id,
                count: 1,
                price: targetElement.getAttribute("price") as string,
              }
              cart.push(obj);
              localStorage.cart = JSON.stringify(cart);
              targetElement.setAttribute("cart", "true")

            }

            if (targetElement.getAttribute("cart") === "true") {
              targetElement.innerHTML = "From cart";
              targetElement.classList.add("btn-secondary")
            } else {
              targetElement.innerHTML = "Add to cart";
              targetElement.classList.remove("btn-secondary")
            }
            this.view.header.update();
          })
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
      (document
        .querySelectorAll('.filters_input') as NodeListOf<HTMLInputElement>)
        .forEach(item => item.addEventListener("input", (e) => {
          const targetElement = e.target as HTMLInputElement;
          const url = new URL(location.href);
          
          if (targetElement.type === "select-one") {
            const url = new URL(location.href);
            url.searchParams.set(targetElement.name, targetElement.value);
            history.pushState(null, '', url.href);
            this.updateProducts();
          }
         
          if (targetElement.type === "checkbox") {
            const urlGet = url.searchParams.get(targetElement.name) as string;            
            if (targetElement.checked) {              
              if (urlGet) {
                url.searchParams.set(targetElement.name, `${urlGet},${targetElement.value}`);
              } else {
                url.searchParams.set(targetElement.name, targetElement.value);
              }              
            } else { 
              if (urlGet) {
                const index = urlGet.split(',').indexOf(targetElement.value);
                const arr = urlGet.split(',');
                arr.splice(index, 1);
                const newQuery = arr.join(',');                
                if (newQuery) {
                  url.searchParams.set(targetElement.name, newQuery);
                } else {
                  url.searchParams.delete(targetElement.name);
                }                
              } else {
                url.searchParams.delete(targetElement.name);
              }              
               
            }
            history.pushState(null, '', url.href);
            this.updateProducts();
          }         
        }));




        const filterReset: HTMLElement | null = document.getElementById('filter-reset'); 
        filterReset?.addEventListener('click', () => {
          const url: URL = new URL(location.href);          
          if (url.href !== url.origin + '/'){
            history.pushState(null, '', url.origin);
            this.updateProducts(); 
          } 
        })

        const filterCopy: HTMLElement | null = document.getElementById('filter-copy');
        filterCopy?.addEventListener('click', () => {
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

      this.addEventSlaider();

    }

    addEventSlaider() {
      
      const sliderPrice = document.getElementById('slider-price') as islider.target;
      noUiSlider.create(sliderPrice, {
      start: this.query.price && this.view.main.filters.slaiderPriceFlag ? this.query.price : this.view.filterProps.price,
      connect: true,
      step: 1,          
      range: {
        'min': 0,
        'max': 1800
      },          
      });
      this.view.main.filters.slaiderPriceFlag = false;
      // (sliderPrice.noUiSlider as islider.API).set(this.query.price);

      const priceMin = document.getElementById('price-min') as HTMLElement;
      const priceMax = document.getElementById('price-max') as HTMLElement;

      (sliderPrice.noUiSlider as islider.API).on('update', function (values, handle) {
        const value = values[handle] as number; 
        console.log(value)     
        if (handle) {
            priceMax.innerHTML = isNaN(value) ? "not found": String(Math.round(value));
        } else {
            priceMin.innerHTML = isNaN(value) ? "not found": String(Math.round(value));
        }
      });

      (sliderPrice.noUiSlider as islider.API).on('slide', (values, handle)=> {
        this.view.main.filters.slaiderPriceFlag = true;
        const url = new URL(location.href);
        url.searchParams.set('price', values.map(item=>Math.round(+item)).join(','));
        history.pushState(null, '', url.href);
        this.updateProducts();          
      });


      
      
      const sliderStock = document.getElementById('slider-stock') as islider.target;
      noUiSlider.create(sliderStock, {
      start: this.query.stock && this.view.main.filters.slaiderStockFlag ? this.query.stock : this.view.filterProps.stock ,
      connect: true,
      step: 1,          
      range: {
        'min': 0,
        'max': 150
      },              
      });
      this.view.main.filters.slaiderStockFlag = false;

      const stockMin = document.getElementById('stock-min') as HTMLElement;
      const stockMax = document.getElementById('stock-max') as HTMLElement;

    (sliderStock.noUiSlider as islider.API).on('update', function (values, handle) {
        const value = values[handle] as number;        
        if (handle) {
            stockMax.innerHTML = isNaN(value) ? "not found": String(Math.round(value));
        } else {
            stockMin.innerHTML = isNaN(value) ? "not found": String(Math.round(value));
        }
    });

    (sliderStock.noUiSlider as islider.API).on('slide', (values, handle)=>{
      this.view.main.filters.slaiderStockFlag = true;
      const url = new URL(location.href);
      url.searchParams.set('stock', values.map(item=>Math.round(+item)).join(','));
      history.pushState(null, '', url.href);    
      this.updateProducts();       
    });

    }

}




