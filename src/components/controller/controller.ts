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
        console.log("controller-url:", url.href)
        console.log("controller-path:", url.pathname)
        console.log("controller-query:", query)

        if (url.pathname.startsWith('/cart')) {
            this.view.main.settingsMain = "/cart";
            this.view.main.reRender();
        }

        if (url.pathname === '/') {
            this.view.main.settingsMain = "/products";
            this.view.main.reRender();
            this.addEventProducts()
            

        }

        if (url.pathname.startsWith('/productDetails')) {
            this.view.main.settingsMain = "/productDetails";
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
    

}