import { Controller } from '../controller';

export class Router {   
    
      url: URL = new URL(location.href);
      query: any = this.getURLtoQuery(location.href);      
      controller: Controller = new Controller(this);
     
      constructor() {       
        this.controller.addEventHeader();
        this.controller.addEventURL();
        this.controller.addEventProducts(); 
      }

      readURL() {
        this.url = new URL(location.href);
        this.query = this.getURLtoQuery(location.href)
        
      }

      

      getURLtoQuery(url:string) {
        const _url:URL = new URL(url);
        const _params:URLSearchParams = new URLSearchParams(_url.search);
        const query = Array.from(_params.keys()).reduce((sum, value)=>{            
          return Object.assign({[value]: _params.get(value)?.split(',')}, sum);
        }, {});
        return query;
      }


}