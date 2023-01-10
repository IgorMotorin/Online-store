import { View } from '../view';
import { Router } from '../router';
import { IDataProducts, queryOptions, IDataProduct } from '../interface/interface';
import Model from '../model/model';
import noUiSlider from 'nouislider';
import * as islider from '../../nouislider';

export class Controller extends Model {
    view: View;
    router: Router;
    query: queryOptions;
    dataProducts: IDataProduct[];

    constructor(router: Router) {
        super();
        this.query = router.query;
        this.dataProducts = this.StartOrResetFilters();
        this.view = new View(this);
        this.router = router;
        this.view.render();
    }

    getStartData(): void {
        this.StartOrResetFilters();
    }

    getDataWithFilters(): IDataProduct[] {

        const act = {
            category: (a: string[]):void => super.getDataFilterByCategory(a),
            brand: (a: string[]):void => super.getDataFilterByBrand(a),
            brandOne: (a: string[]):void => super.getDataFilterByBrandOne(a),
            price: (a: number, b: number): IDataProduct[] => super.getDataFilterByPrice(a, b),
            priceOne: (a: number, b: number): IDataProduct[] => super.getDataFilterByPriceOne(a, b),
            stock: (a: number, b: number): IDataProduct[] => super.getDataFilterByStock(a, b),
            stockOne: (a: number, b: number): IDataProduct[] => super.getDataFilterByStockOne(a, b),
            search: (a: string): IDataProduct[] => super.getDataFilterBySearch(a),
            searchOne: (a: string): IDataProduct[] => super.getDataFilterBySearchOne(a)
        }


        if (this.query.category) {
            // act["category"](this.query.category);
            super.getDataFilterByCategory(this.query.category);
            // act["brand"](this.query.brand);
            if (this.query.brand) {
                super.getDataFilterByBrand(this.query.brand);
            }
            if (this.query.price) {
                super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
            }
            if (this.query.stock) {
                super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
            }
            if (this.query.search) {
                super.getDataFilterBySearch(this.query.search[0]);
            }
        } else if (this.query.brand) {
            super.getDataFilterByBrandOne(this.query.brand);
            if (this.query.price) {
                super.getDataFilterByPrice(Number(this.query.price[0]), Number(this.query.price[1]));
            }
            if (this.query.stock) {
                super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
            }
            if (this.query.search) {
                super.getDataFilterBySearch(this.query.search[0]);
            }
        } else if (this.query.price) {
            super.getDataFilterByPriceOne(Number(this.query.price[0]), Number(this.query.price[1]));
            if (this.query.stock) {
                super.getDataFilterByStock(Number(this.query.stock[0]), Number(this.query.stock[1]));
            }
            if (this.query.search) {
                super.getDataFilterBySearch(this.query.search[0]);
            }
        } else if (this.query.stock) {
            super.getDataFilterByStockOne(Number(this.query.stock[0]), Number(this.query.stock[1]));
            if (this.query.search) {
                super.getDataFilterBySearch(this.query.search[0]);
            }
        } else if (this.query.search) {
            super.getDataFilterBySearchOne(this.query.search[0]);
        }

        if (this.query.sort) {
            if (this.query.sort[0] === 'Sort by') {
                super.getDataSortByIdIncrease();
            }
            if (this.query.sort[0] === 'price-ascending') {
                super.getDataSortByPriceIncrease();
            }
            if (this.query.sort[0] === 'price-descending') {
                super.getDataSortByPriceDecrease();
            }
            if (this.query.sort[0] === 'rating-ascending') {
                super.getDataSortByRatingIncrease();
            }
            if (this.query.sort[0] === 'rating-descending') {
                super.getDataSortByRatingDecrease();
            }
            if (this.query.sort[0] === 'discount-ascending') {
                super.getDataSortByDiscountIncrease();
            }
            if (this.query.sort[0] === 'discount-descending') {
                super.getDataSortByDiscountDecrease();
            }
        }

        return super.getFinalData();
    }

    getCart(id: number): IDataProduct[] {
        return super.getDataById(id);
    }

    getBasket(): void {
        super.getDataByIdForBasket([1, 2, 3]);
    }

    updateView(url: URL, query: queryOptions) {
        this.query = query;

        if (url.pathname === '/') {
            this.view.main.settingsMain = '/products';

            if (Object.keys(this.query).length === 0) {
                this.dataProducts = this.StartOrResetFilters();
                this.view.main.dataProducts = this.dataProducts;
            } else {
                this.dataProducts = this.getDataWithFilters();
                this.view.main.dataProducts = this.dataProducts;
            }
            this.view.main.update();
            this.view.main.filters.query = this.query;
            this.view.getFilterProps();
            this.view.main.filters.update(this.view.filterProps);
            this.addEventProducts();
            this.addEventFilters();
            this.addEventSearch();
        } else if (url.pathname === '/cart') {
            this.view.main.settingsMain = '/cart';
            const obj = this.view.header.getLocalStorage();
            this.view.main.cart.props = super.getDataByIdForBasket(obj.ids);
            this.view.main.cart.propsArr = this.view.main.cart.props;
            this.view.main.update();
        } else if (url.pathname === '/productDetails') {
            this.view.main.settingsMain = '/productDetails';
            if (this.query.id) {
                this.dataProducts = this.getCart(Number(this.query.id[0]));
                this.view.main.dataProducts = this.dataProducts;
                this.view.main.update();
                this.addEventCardAddButton();
                this.addEventDetailsBayButton();
            }
        } else {
            this.view.main.settingsMain = '/page404';
            this.view.main.update();
        }
    }

    updateProducts(): void {
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

    updateFilter(): void {
        this.view.main.filters.query = this.query;
        this.view.getFilterProps();
        this.view.main.filters.update(this.view.filterProps);
        this.addEventFilters();
    }

    addEventHeader(): void {
        const header_button: HTMLButtonElement | null = document.querySelector('.header_button');
        header_button?.addEventListener('click', (e) => {
            history.pushState(null, 'cart', location.origin + '/cart');
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);
        });

        const header_buttonHome: HTMLButtonElement | null = document.querySelector('.header_buttonHome');
        header_buttonHome?.addEventListener('click', (e) => {
            history.pushState(null, 'cart', location.origin);
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);
        });
    }

    addEventURL(): void {
        window.addEventListener('popstate', (e) => {
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);
        });
    }

    addEventProducts() {
        const card_buttonDetails: NodeListOf<Element> = document.querySelectorAll('.card_buttonDetails');
        card_buttonDetails.forEach((item) =>
            item.addEventListener('click', (e) => {
                const targetElement: EventTarget | null = e.target;
                if (targetElement instanceof HTMLElement) {
                    history.pushState(
                        null,
                        'productDetails',
                        location.origin + '/productDetails' + '?id=' + targetElement.id
                    );
                    this.router.readURL();
                    this.updateView(this.router.url, this.router.query);
                }
            })
        );
        this.addEventCardAddButton();
    }

    addEventDetailsBayButton() {
        const details_buttonBuy: NodeListOf<Element> = document.querySelectorAll('.details_buttonBuy');
        details_buttonBuy.forEach((item) =>
            item.addEventListener('click', (e) => {
                const targetElement: EventTarget | null = e.target;
                if (targetElement instanceof HTMLElement) {
                    if (localStorage.cart) {
                        const cart: { id: string; count: number; price: string | null }[] = JSON.parse(
                            localStorage.cart
                        );
                        const cartIndex: number = cart.findIndex((item) => item.id == targetElement.id);
                        if (cartIndex == -1) {
                            const obj: { id: string; count: number; price: string | null } = {
                                id: targetElement.id,
                                count: 1,
                                price: targetElement.getAttribute('price'),
                            };
                            cart.push(obj);
                            localStorage.cart = JSON.stringify(cart);
                        }
                    } else {
                        const cart: { id: string; count: number; price: string | null }[] = [];
                        const obj: { id: string; count: number; price: string | null } = {
                            id: targetElement.id,
                            count: 1,
                            price: targetElement.getAttribute('price'),
                        };
                        cart.push(obj);
                        localStorage.cart = JSON.stringify(cart);
                    }
                }

                history.pushState(null, 'buyNow', location.origin + '/cart');
                this.router.readURL();
                this.updateView(this.router.url, this.router.query);
            })
        );
    }

    addEventCardAddButton() {
        const card_buttonAdd: NodeListOf<Element> = document.querySelectorAll('.card_buttonAdd');

        card_buttonAdd.forEach((item) =>
            item.addEventListener('click', (e) => {
                const targetElement: EventTarget | null = e.target;

                if (targetElement instanceof HTMLElement) {
                    if (localStorage.cart) {
                        const cart: { id: string; count: number; price: string | null }[] = JSON.parse(
                            localStorage.cart
                        );
                        const cartIndex: number = cart.findIndex((item) => item.id === targetElement.id);
                        if (cartIndex !== -1) {
                            cart.splice(cartIndex, 1);
                            targetElement.setAttribute('cart', 'false');
                        } else {
                            const obj: { id: string; count: number; price: string | null } = {
                                id: targetElement.id,
                                count: 1,
                                price: targetElement.getAttribute('price'),
                            };
                            cart.push(obj);
                            targetElement.setAttribute('cart', 'true');
                        }
                        localStorage.cart = JSON.stringify(cart);
                    } else {
                        const cart: { id: string; count: number; price: string | null }[] = [];
                        const obj: { id: string; count: number; price: string | null } = {
                            id: targetElement.id,
                            count: 1,
                            price: targetElement.getAttribute('price'),
                        };
                        cart.push(obj);
                        localStorage.cart = JSON.stringify(cart);
                        targetElement.setAttribute('cart', 'true');
                    }

                    if (targetElement.getAttribute('cart') === 'true') {
                        targetElement.innerHTML = 'From cart';
                        targetElement.classList.add('btn-secondary');
                    } else {
                        targetElement.innerHTML = 'Add to cart';
                        targetElement.classList.remove('btn-secondary');
                    }
                }
                this.view.header.update();
            })
        );
    }

    addEventSearch() {
        const filters_input:NodeListOf<HTMLInputElement> = document.querySelectorAll('.filters_input');
        filters_input.forEach((item) => {
            item.addEventListener('input', (e) => {
                const targetElement = e.target as HTMLInputElement;
                const url = new URL(location.href);

                if (targetElement.type === 'text') {
                    const url = new URL(location.href);
                    if (targetElement.value) {
                        url.searchParams.set(targetElement.name, targetElement.value);
                    } else {
                        url.searchParams.delete(targetElement.name);
                    }

                    history.pushState(null, '', url.href);
                    this.updateProducts();
                }
            });
            if (this.query.search && item.type === 'text') {
                item.value = this.query.search;
            }
        });

        const searchButton: HTMLElement | null = document.getElementById('button-addon2');
        const search = document.getElementById('exampleDataList') as HTMLInputElement;

        searchButton?.addEventListener('click', () => {
            const url = new URL(location.href);
            if (search.value) {
                url.searchParams.set(search.name, search.value);
            } else {
                url.searchParams.delete(search.name);
            }
            history.pushState(null, '', url.href);
            this.updateProducts();
        });
    }

    addEventFilters() {
        (document.querySelectorAll('.filters_input') as NodeListOf<HTMLInputElement>).forEach((item) => {
            item.addEventListener('input', (e) => {
                const targetElement = e.target as HTMLInputElement;
                const url = new URL(location.href);

                if (targetElement.type === 'select-one') {
                    const url = new URL(location.href);
                    url.searchParams.set(targetElement.name, targetElement.value);
                    history.pushState(null, '', url.href);
                    this.updateProducts();
                }

                if (targetElement.type === 'checkbox') {
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
            });
            if (this.query.sort && item.type === 'select-one') {
                item.value = this.query.sort;
            }
        });

        const filterReset: HTMLElement | null = document.getElementById('filter-reset');
        filterReset?.addEventListener('click', () => {
            const url: URL = new URL(location.href);
            if (url.href !== url.origin + '/') {
                history.pushState(null, '', url.origin);
                this.updateProducts();
            }
            history.pushState(null, '', url.origin);
            this.router.readURL();
            this.updateView(this.router.url, this.router.query);
            // this.updateProducts();
        });

        const filterCopy: HTMLElement | null = document.getElementById('filter-copy');
        filterCopy?.addEventListener('click', () => {
            const url = new URL(location.href);
            filterCopy.classList.add('active');
            filterCopy.innerHTML = 'Copied to clipboard';
            setTimeout(() => {
                navigator.clipboard
                    .writeText(url.href)
                    .then(() => {
                        filterCopy.classList.remove('active');
                        filterCopy.innerHTML = 'Copy link';
                    })
                    .catch((err) => {
                        console.log('Something went wrong', err);
                    });
            }, 1000);
        });

        const sortView4: HTMLElement | null = document.getElementById('sort-view4');
        sortView4?.addEventListener('click', () => {
            const url = new URL(location.href);
            url.searchParams.set('view', 'card');
            history.pushState(null, '', url.href);
            this.updateProducts();
        });

        const sortView2: HTMLElement | null = document.getElementById('sort-view2');
        sortView2?.addEventListener('click', () => {
            const url = new URL(location.href);
            url.searchParams.set('view', 'line');
            history.pushState(null, '', url.href);
            this.updateProducts();
        });

        if (this.query.view && sortView4 && sortView2) {
            if (this.query.view[0] === 'card') {
                sortView4.innerHTML = `<svg width="32" height="32">
                                  <rect width="14" height="14" x="0" y="0"
                                  fill="#0d6efd"                                            
                                  stroke-width="1"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="18" y="0"
                                  fill="#0d6efd"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="0" y="18"
                                  fill="#0d6efd"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="18" y="18"
                                  fill="#0d6efd"
                                  stroke="#0d6efd"/>
                                </svg>`;
                sortView2.innerHTML = `<svg width="32" height="32">
                                <rect width="32" height="14" x="0" y="0"
                                fill="none"
                                stroke="#0d6efd"/>                                        
                                <rect width="32" height="14" x="0" y="18"
                                fill="none"
                                stroke="#0d6efd"/>                                    
                                </svg>`;
            } else if (this.query.view[0] === 'line') {
                sortView4.innerHTML = `<svg width="32" height="32">
                                  <rect width="14" height="14" x="0" y="0"
                                  fill="none"                                            
                                  stroke-width="1"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="18" y="0"
                                  fill="none"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="0" y="18"
                                  fill="none"
                                  stroke="#0d6efd"/>
                                  <rect width="14" height="14" x="18" y="18"
                                  fill="none"
                                  stroke="#0d6efd"/>
                                </svg>`;
                sortView2.innerHTML = `<svg width="32" height="32">
                                  <rect width="32" height="14" x="0" y="0"
                                  fill="#0d6efd"
                                  stroke="#0d6efd"/>                                        
                                  <rect width="32" height="14" x="0" y="18"
                                  fill="#0d6efd"
                                  stroke="#0d6efd"/>                                    
                                  </svg>`;
            }
        }

        this.addEventSlaider();
    }

    addEventSlaider(): void {
        const sliderPrice: islider.target | null = document.getElementById('slider-price');

        if (sliderPrice instanceof HTMLElement) {
            noUiSlider.create(sliderPrice, {
                start:
                    this.query.price && this.view.main.filters.slaiderPriceFlag
                        ? this.query.price
                        : this.view.filterProps.price,
                connect: true,
                step: 1,
                range: {
                    min: 0,
                    max: 1800,
                },
            });

            this.view.main.filters.slaiderPriceFlag = false;

            const priceMin: HTMLElement | null = document.getElementById('price-min');
            const priceMax: HTMLElement | null = document.getElementById('price-max');
            const isliderAPI: islider.API | undefined = sliderPrice.noUiSlider;

            if (priceMin instanceof HTMLElement && priceMax instanceof HTMLElement) {
                isliderAPI?.on('update', function (values, handle) {
                    const value = Number(values[handle]);
                    if (handle) {
                        priceMax.innerHTML = isNaN(value) ? 'not found' : String(Math.round(value));
                    } else {
                        priceMin.innerHTML = isNaN(value) ? 'not found' : String(Math.round(value));
                    }
                });
            }

            isliderAPI?.on('slide', (values, handle) => {
                this.view.main.filters.slaiderPriceFlag = true;
                const url = new URL(location.href);
                url.searchParams.set('price', values.map((item) => Math.round(+item)).join(','));
                history.pushState(null, '', url.href);
                this.updateProducts();
            });
        }

        const sliderStock: islider.target | null = document.getElementById('slider-stock');

        if (sliderStock instanceof HTMLElement) {
            noUiSlider.create(sliderStock, {
                start:
                    this.query.stock && this.view.main.filters.slaiderStockFlag
                        ? this.query.stock
                        : this.view.filterProps.stock,
                connect: true,
                step: 1,
                range: {
                    min: 0,
                    max: 150,
                },
            });
            this.view.main.filters.slaiderStockFlag = false;

            const stockMin: HTMLElement | null = document.getElementById('stock-min');
            const stockMax: HTMLElement | null = document.getElementById('stock-max');
            const isliderAPI: islider.API | undefined = sliderStock.noUiSlider;

            if (stockMin instanceof HTMLElement && stockMax instanceof HTMLElement) {
                isliderAPI?.on('update', function (values, handle) {
                    const value = Number(values[handle]);
                    if (handle) {
                        stockMax.innerHTML = isNaN(value) ? 'not found' : String(Math.round(value));
                    } else {
                        stockMin.innerHTML = isNaN(value) ? 'not found' : String(Math.round(value));
                    }
                });
            }

            isliderAPI?.on('slide', (values, handle) => {
                this.view.main.filters.slaiderStockFlag = true;
                const url = new URL(location.href);
                url.searchParams.set('stock', values.map((item) => Math.round(+item)).join(','));
                history.pushState(null, '', url.href);
                this.updateProducts();
            });
        }
    }
}
