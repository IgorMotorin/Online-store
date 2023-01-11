// import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card, CardH } from '../card';
import { Filters } from '../filters';
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
    settingsMain: '/cart' | '/products' | '/productDetails' | '/page404';
    dataProducts: IDataProduct[];
    filterProps: IFiltersProps;

    query: queryOptions;
    view?: string = 'card';
    mod = new Model();

    constructor(dataProducts: IDataProduct[], filterProps: IFiltersProps, query: queryOptions) {
        this.dataProducts = dataProducts;
        this.filterProps = filterProps;
        this.query = query;
        if (query.view) {
            this.view = query.view;
        }
        this.card = new Card(this.dataProducts[0]);
        this.cardH = new CardH(this.dataProducts[0]);
        this.filters = new Filters(this.filterProps, this.query);
        this.sort = new Sort();
        this.search = new Search();
        this.cart = new Cart(this.mod.getDataByIdForBasket([]));
        this.productDetails = new ProductDetails(this.dataProducts[0]);
        this.page404 = new Page404();
        this.settingsMain = '/products';
    }

    render() {
        let template = ``;
        const productsNotFound = `<div class = "text-center"">
                                        <h3>Products not found</h3>
                                        </div> `;

        const obj = {cards: ''};

        if (this.settingsMain === '/products') {

            if ( this.view == 'card') {
                obj.cards = `<div class = "products">
                            ${this.dataProducts.length === 0 ? productsNotFound : ''}                                         
                                ${this.dataProducts
                                    .map((item) => {
                                        this.card.props = item;
                                        return `${this.card.render()}`;
                                    })
                                    .join('')}
                                    </div>`; 
            } else {
                obj.cards = `<div class = "products">
                            ${this.dataProducts.length === 0 ? productsNotFound : ''}                                     
                                ${this.dataProducts
                                    .map((item) => {
                                        this.cardH.props = item;
                                        return `${this.cardH.render()}`;
                                    })
                                    .join('')}
                                    </div>`;
            }            

            const productsView = `${this.search.render()}
                            <div class = "d-flex flex-row mb-3 container">
                                ${this.filters.render()}
                                <div class="container">
                                    ${this.sort.render()}
                                    ${
                                        this.dataProducts.length === 0 ? productsNotFound : ''
                                    }                                
                                    ${obj.cards}                                    
                                </div>
                            </div> `;

            template = productsView;
        }
        if (this.settingsMain === '/cart') {
            const cartView = `${this.cart.render()}`;
            template = cartView;
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

    update(): void {
        const main: HTMLElement | null = document.querySelector('.main');
        const mainUpdate = document.createElement('div');
        mainUpdate.classList.add("container", "main")
        mainUpdate.innerHTML = this.render();
        if (main) {
            main.replaceWith(mainUpdate);
        }
        if (this.settingsMain === '/cart') {
            this.cart.updateRander();
        }
    }

    updateProducts(view = 'card'): void {
        const productsNotFound = `<div class = "text-center"">
                                    <h3>Products not found</h3>
                                    </div> `;

        const obj = {cards: ''};

       if ( view == 'card') {
        obj.cards = `                     
                    ${this.dataProducts.length === 0 ? productsNotFound : ''}                                         
                        ${this.dataProducts
                            .map((item) => {
                                this.card.props = item;
                                return `${this.card.render()}`;
                            })
                            .join('')}
                    `; 
    } else {
        obj.cards = `                   
                    ${this.dataProducts.length === 0 ? productsNotFound : ''}                                     
                        ${this.dataProducts
                            .map((item) => {
                                this.cardH.props = item;
                                return `${this.cardH.render()}`;
                            })
                            .join('')}
                    `;
    }

        
        const products: HTMLElement | null = document.querySelector('.products');
        const productsUpdate = document.createElement('div');
        productsUpdate.classList.add('products');
        productsUpdate.innerHTML = obj.cards;            
        if (products) {
            products.replaceWith(productsUpdate);
        }
    }
}
