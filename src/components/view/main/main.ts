import { dataProducts } from '../../model/dataProducts';
import { Header } from '../header';
import { Card } from '../card';
import { Filters } from '../filters'
import { Footer } from '../footer';
import { Search } from '../search';
import { IFiltersProps } from '../../interface/interface';
import { Sort } from '../sort';
import { Cart } from '../cart';


const filterProps: IFiltersProps = {
    category: [['Мобильные', 10], ['Компьютеры', 20], ['Телефоны', 30], ['Гарнитура', 40]],
    brand: [['Sony', 11], ['Apple', 12], ['Nokian', 13], ['гарнитура', 14]],
    price: [0, 2000],
    stock: [3, 10]
}


export class Main {
   
    card: Card = new Card(dataProducts.products[0]);  
    filters: Filters = new Filters(filterProps);
    sort: Sort = new Sort();
    search: Search = new Search();
    cart: Cart = new Cart(dataProducts.products[0]);


render() {

    const productsView = `${this.search.render()}
                            <div class = "d-flex flex-row mb-3 container">
                            ${this.filters.render()}
                                <div class="container">
                                    ${this.sort.render()}
                                    <div class = "products">                                         
                                        ${dataProducts.products
                                            .map(item=>{
                                            this.card.props = item;
                                            return `${this.card.render()}`
                                            }).join("")}
                                    </div>
                                
                                </div>
                            </div> `;

    const cartView = `${this.cart.render()}`;
    
        return `<main class = "container">
                ${cartView}                                      
                </main>`;
}

}