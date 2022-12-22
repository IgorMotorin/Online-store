import { dataProducts } from '../model/dataProducts';
import { Header } from './header';
import { Footer } from './footer';
import { IFiltersProps } from '../interface/interface';
import { Main } from './main';
import { Order } from './order';




export class View {
   
    header: Header = new Header(1200, 16);    
    main: Main = new Main();
    footer: Footer = new Footer();
    root: HTMLElement = document.getElementById('root') as HTMLElement;
    order: Order = new Order();
    
   
     
    

    render() {       
        if (!this.root) {
            throw new Error('The root element is undefined!');
        }

        this.root.innerHTML =  `${this.header.total = 1500, this.header.render()}                                
                                ${this.main.render()}                                
                                ${this.footer.render()}
                                ${this.order.render()}`;
    }

}