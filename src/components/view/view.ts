import { dataProducts } from '../model/dataProducts';
import { Header } from './header';
import { Footer } from './footer';
import { IFiltersProps } from '../interface/interface';
import { Main } from './main';
import { Order } from './order';
import { Controller } from '../controller';

export class View {
    header: Header;
    main: Main;
    footer: Footer;
    root: HTMLElement;
    order: Order;
    controller: Controller;
    filterProps: IFiltersProps;

    constructor(controller: Controller) {
        this.controller = controller;
        this.filterProps = this.getFilterProps();
        this.header = new Header(0, 0);
        this.main = new Main(controller.dataProducts, this.filterProps, controller.query);
        this.footer = new Footer();
        this.root = document.getElementById('root') as HTMLElement;
        this.order = new Order();
        this.getFilterProps();
    }

    getFilterProps(): IFiltersProps {
        const obj: IFiltersProps = {
            category: [],
            brand: [],
            price: [],
            stock: [],
            found: 0,
        };
        const categoryListAll: string[] = [];
        const brandListAll: string[] = [];
        const priceList: number[] = [];
        const stockList: number[] = [];

        this.controller.dataProducts.forEach((item) => {
            categoryListAll.push(item.category);
            brandListAll.push(item.brand);
            priceList.push(item.price);
            stockList.push(item.stock);
        });

        const categoryList: (string | number)[] | (string | number)[][] = [...new Set(categoryListAll)];
        const brandList: (string | number)[] | (string | number)[][] = [...new Set(brandListAll)];
        categoryList.map((item): (string | number)[] => {
            const num: number = categoryListAll.filter((items) => item == items).length;
            const out: (string | number)[] = [item, num];
            obj.category.push(out);
            return out;
        });

        brandList.map((item): (string | number)[] => {
            const num: number = brandListAll.filter((items) => item == items).length;
            const out: (string | number)[] = [item, num];
            obj.brand.push(out);
            return out;
        });

        obj.price = [priceList.sort((a, b) => a - b)[0], priceList.sort((a, b) => a - b)[priceList.length - 1]];
        obj.stock = [stockList.sort((a, b) => a - b)[0], stockList.sort((a, b) => a - b)[stockList.length - 1]];
        obj.found = this.controller.dataProducts.length;
        return (this.filterProps = obj);
    }

    render(): void {
        if (!this.root) {
            throw new Error('The root element is undefined!');
        }
        this.root.innerHTML = `${this.header.render()}                                
                                ${this.main.render()}                                
                                ${this.footer.render()}
                                ${this.order.render()}`;

        this.afterRender();
    }

    afterRender(): void {
        this.order.validation();
    }
}
