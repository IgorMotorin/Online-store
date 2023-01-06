// import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card } from '../card';
import { Filters } from '../filters'
import { Footer } from '../footer';
import { Search } from '../search';
import { IDataProduct, IDataProducts, IFiltersProps, queryOptions } from '../../interface/interface';
import { Sort } from '../sort';
import { Cart } from '../cart';
import { ProductDetails } from '../productDetails';
import { Page404 } from '../page404';
import { Template } from 'webpack';





export class Main {
   
    card: Card;  
    filters: Filters;
    sort: Sort;
    search: Search;
    cart: Cart;
    productDetails: ProductDetails;
    page404: Page404;
    settingsMain: "/cart" | "/products" | "/productDetails" | "/page404";
    dataProducts: IDataProduct[];
    filterProps: IFiltersProps;
    query: queryOptions;

    constructor(dataProducts: IDataProduct[], filterProps: IFiltersProps, query: queryOptions) {
    this.dataProducts = dataProducts;
    this.filterProps = filterProps;
    this.query = query;
    this.card = new Card(this.dataProducts[0]);  
    this.filters = new Filters(this.filterProps, this.query);
    this.sort = new Sort();
    this.search = new Search();
    this.cart = new Cart(this.dataProducts[0]);
    this.productDetails = new ProductDetails(this.dataProducts[0]);
    this.page404 = new Page404()
    this.settingsMain = "/products";
    }


render() {

    const productsView = `${this.search.render()}
                            <div class = "d-flex flex-row mb-3 container">
                                ${this.filters.render()}
                                <div class="container">
                                    ${this.sort.render()}
                                    <div class = "products">                                         
                                        ${this.dataProducts
                                            .map(item=>{
                                            this.card.props = item;
                                            return `${this.card.render()}`
                                            }).join("")}
                                    </div>
                                
                                </div>
                            </div> `;

    const cartView = `${this.cart.render()}`;

    const productDetails = `${this.productDetails.render()}`;

    const page404 = `${this.page404.render()}`

    let template = ``;
   
    if (this.settingsMain === '/products') {template = productsView}
    if (this.settingsMain === '/cart') {template = cartView}
    if (this.settingsMain === '/productDetails') {template = productDetails}
    if (this.settingsMain === '/page404') {template = page404}
    
        return `<main class = "container main">
                ${template}                                      
                </main>`;
}


update () {
    (document.querySelector(".main") as HTMLElement).outerHTML = this.render()

}
updateProducts () {
    (document.querySelector(".products") as HTMLElement).innerHTML = this.dataProducts
                                                                        .map(item=>{
                                                                        this.card.props = item;
                                                                        return `${this.card.render()}`
                                                                        }).join("");

}

}