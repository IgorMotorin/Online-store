import { dataProducts } from '../model/dataProducts';
import { Header } from './header';
import { Card } from './card';
import { Filters } from './filters'
import { Footer } from './footer';
import { Search } from './search';
import { IFiltersProps } from '../interface/interface';


const filterProps: IFiltersProps = {
    category: [['Мобильные', 10], ['Компьютеры', 20], ['Телефоны', 30], ['Гарнитура', 40]],
    brand: [['Sony', 11], ['Apple', 12], ['Nokian', 13], ['гарнитура', 14]],
    price: [0, 2000],
    stock: [3, 10]
}

export class View {
   
    header: Header = new Header(1200, 16);
    search: Search = new Search(); 
    card: Card = new Card(dataProducts.products[0]);  
    filters: Filters = new Filters(filterProps); 
    footer: Footer = new Footer();
    root: HTMLElement = document.getElementById('root') as HTMLElement;
     
    

    render() {       
        if (!this.root) {
            throw new Error('The root element is undefined!');
        }

        this.root.innerHTML =  `${this.header.total = 1500, this.header.render()}
                                ${this.search.render()}                                    
                                <main class = "d-flex flex-row mb-3 container">
                                    ${this.filters.render()}
                                    <div class = "products">
                                    
                                        ${this.card.props = dataProducts.products[0], this.card.render()}
                                        ${this.card.props = dataProducts.products[1], this.card.render()}
                                        ${this.card.props = dataProducts.products[2], this.card.render()}
                                        ${this.card.props = dataProducts.products[3], this.card.render()}
                                        ${this.card.props = dataProducts.products[4], this.card.render()}
                                        ${this.card.props = dataProducts.products[5], this.card.render()}
                                        ${dataProducts.products
                                            .map(item=>{
                                            this.card.props = item;
                                            return `${this.card.render()}`
                                            }).join("")}
                                    </div>
                                </main>
                                ${this.footer.render()}
                            `;
    }

}