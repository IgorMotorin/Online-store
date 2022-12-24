import { View } from "../view";

export class Header {
   
        total: number;
        volume: number;

    constructor(total: number, volume: number) {
        this.total = total;
        this.volume = volume;
    }

   
    render() {
        return `
        <div class="container align-baseline">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <p style = "cursor: pointer" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none header_buttonHome">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                    <span class="fs-4">Online-store</span>
                </p>
                <ul class="nav nav-pills"> 
                    <li class="nav-item">                    
                        <button type="button" class="btn btn-primary position-relative header_button">
                            Cart total: ${this.total} EUR
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                ${this.volume}
                                <span class="visually-hidden">Корзина заказов</span>
                            </span>
                        </button>                    
                    </li>
                </ul>
            </header>
        </div>
      `;
    }

}