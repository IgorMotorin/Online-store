import { Controller } from '../controller';
import { queryOptions } from "../interface/interface";

export class Router {   
    
      url: URL = new URL(location.href);
      query: any = this.getURLtoQuery(location.href);      
      controller: Controller = new Controller(this);
     
      constructor() {      
         
        this.controller.addEventHeader();
        this.controller.addEventURL();
        this.controller.addEventProducts();
        this.controller.addEventFilters();
        

        
        
        // if (document.referrer) {
        //   this.url = new URL(document.referrer);
        //   this.query = this.getURLtoQuery(document.referrer)
        //   history.pushState(null, 'redirect', document.referrer);          
        // }
        this.controller.updateView(this.url, this.query);
        
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


      
  // getRouteInfo(){
  //   // Тут разбивка адресной строки через location.search как в демке
  //       const hash = location.search ? location.search.slice(1) : '';
  //       if (hash) { const newHash = [...hash.split('&')];
  //       const queryOptionsObject: queryOptions = {};
  //       for (let i=0;i<newHash.length;i++){if (newHash[i].indexOf('category=') !== -1) {queryOptionsObject.category = newHash[i].slice(9).split('%E2%86%95')};
  //       if (newHash[i].indexOf('brand=') !== -1) {queryOptionsObject.brand = newHash[i].slice(6).split('%E2%86%95')}
  //       if (newHash[i].indexOf('price=') !== -1) {const price = newHash[i].slice(6).split('%E2%86%95');
  //       for (const item of price){ queryOptionsObject.price?.push(Number(item))}}
  //       if (newHash[i].indexOf('stock=') !== -1) {const stock = newHash[i].slice(6).split('%E2%86%95');
  //       for (const item of stock){ queryOptionsObject.stock?.push(Number(item))}}
  //       if (newHash[i].indexOf('sort=') !== -1) {queryOptionsObject.sort = newHash[i].slice(5).split('%E2%86%95').join('')}
  //     } 
  //     return queryOptionsObject; }
  //     return hash;
     
  //   // разбивание хэша и формирование объекта с параметрами из него//
    
  // }

  // handleHash(){
  //   if (localStorage.savedUrl) {location.href = this.makeUrl();}
  //   localStorage.savedUrl = location.search;
  //   const queryOptionsObject = this.getRouteInfo();
  //   if (queryOptionsObject) {const contr = new Controller(queryOptionsObject);
  //   contr.getData();}
  //   if (!queryOptionsObject) {const contr = new Controller();
  //   contr.getStartData()}
  //   // сохраняем в localStorage ссылку href
  //   // Типа location.href = localStorage.savedUrl При сбросе фильтров очистить локалстор
  //   // вызываем контроллер и передаем параметры из getRouteInfo в виде объекта queryOptionsObject
  // }

  // hashChange(){
  //   addEventListener('hashchange', this.handleHash);
  //   this.handleHash();
  //   // вызывается при изменении хэша
  // }

//     makeUrl() {
//     const addHash = location.hash.slice(1);

//     const urlOptions = { ...this.options, ...options };
//     let url = `${this.baseLink}${endpoint}?`;

//     Object.keys(urlOptions).forEach((key) => {
//         url += `${key}=${urlOptions[key]}&`;
//     });

//     return url.slice(0, -1);
// }

}