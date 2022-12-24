import { View } from "../view";
import { Router } from "../router";

export class Controller {   
    
    view: View = new View();
    router: Router;
    

    constructor(router: Router) {
        this.router = router;
        this.view.render();
        
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