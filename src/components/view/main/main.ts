// import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card, CardH } from '../card';
import { Filters } from '../filters'
import { Footer } from '../footer';
import { Search } from '../search';
import { IDataProduct, IDataProducts, IFiltersProps, queryOptions } from '../../interface/interface';
import { Sort } from '../sort';
import { Cart } from '../cart';
import { ProductDetails } from '../productDetails';
import { Page404 } from '../page404';
import { Template } from 'webpack';
import { Controller } from '../../controller';
import Model from '../../model/model';





export class Main {


    card: Card;
    cardH: CardH;
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
    view?: string = "card";
    mod = new Model();


    constructor(dataProducts: IDataProduct[], filterProps: IFiltersProps, query: queryOptions) {
        this.dataProducts = dataProducts;
        this.filterProps = filterProps;
        this.query = query;
        if (query.view) { this.view = query.view; }
        this.card = new Card(this.dataProducts[0]);
        this.cardH = new CardH(this.dataProducts[0]);
        this.filters = new Filters(this.filterProps, this.query);
        this.sort = new Sort();
        this.search = new Search();

        this.cart = new Cart(this.mod.getDataByIdForBasket([]));
        this.productDetails = new ProductDetails(this.dataProducts[0]);
        this.page404 = new Page404()
        this.settingsMain = "/products";
    }



    render() {
        let template = ``;

        const productsNotFound = `<div class = "text-center"">
                                        <h3>Products not found</h3>
                                        </div> `;

        if (this.settingsMain === '/products') {
            const cards = `
                    <div class = "products">                                         
                        ${this.dataProducts
                    .map(item => {
                        this.card.props = item;
                        return `${this.card.render()}`
                    }).join("")}
                    </div>
                    `;

            const cardsH = `
                    <div class = "products">                                         
                        ${this.dataProducts
                    .map(item => {
                        this.cardH.props = item;
                        return `${this.cardH.render()}`
                    }).join("")}
                    </div>
                    `;

            

            

            const productsView = `${this.search.render()}
                            <div class = "d-flex flex-row mb-3 container">
                                ${this.filters.render()}
                                <div class="container">
                                    ${this.sort.render()}
                                    ${this.dataProducts.length === 0 ? productsNotFound : ""}                                
                                    ${this.view == "card" ? cards : cardsH}                                    
                                </div>
                            </div> `;

           

                       
            template = productsView;
        }
        if (this.settingsMain === '/cart') {
            const cartView = `${this.cart.render()}`;
            template = cartView
        }
        if (this.settingsMain === '/productDetails') {
            this.productDetails.props = this.dataProducts[0];
            const productDetails = `${this.productDetails.render()}`;
            template = productDetails;
        }
        if (this.settingsMain === '/page404') {
            const page404 = `${this.page404.render()}`;
            template = page404;
        }
        return `<main class = "container main">
                ${template}                                      
                </main>`;
    }



    update() {
        (document.querySelector(".main") as HTMLElement).outerHTML = this.render();
        if (this.settingsMain === '/cart') { this.cart.updateRander() }
    }

    updateProducts(view = "card") {

        const productsNotFound =    `<div class = "text-center"">
                                    <h3>Products not found</h3>
                                    </div> `;

        const cards = ` 
                    <div class = "products">
                    ${this.dataProducts.length === 0 ? productsNotFound : ""}                                         
                        ${this.dataProducts
                .map(item => {
                    this.card.props = item;
                    return `${this.card.render()}`
                }).join("")}
                    </div>
                    `;

        const cardsH = `
                    <div class = "products">
                    ${this.dataProducts.length === 0 ? productsNotFound : ""}                                     
                        ${this.dataProducts
                .map(item => {
                    this.cardH.props = item;
                    return `${this.cardH.render()}`
                }).join("")}
                    </div>
                    `;
        (document.querySelector(".products") as HTMLElement).outerHTML = view == "card" ? cards : cardsH;

    }

}