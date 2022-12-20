import { IFiltersProps } from "../../interface/interface";

export class Filters {


    
        props: IFiltersProps;
        

    constructor(props: IFiltersProps) {
        this.props = props;        
    }


    render() {
        return `
       

        <div class="filters">
            <div class = "d-flex flex-column gap-1">
            <button type="button" class="btn btn-outline-primary btn-sm">Reset filters</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Copy link</button>
            </div>
        
            <label for="customRange2" class="form-label">Price</label>
            <div class = "d-flex justify-content-between">
                <span class="badge text-bg-primary">${this.props.price[0]}</span>
                <span class="badge text-bg-primary">${this.props.price[1]}</span>
            </div>         
            <input  type="range" 
                    class="form-range one-range" 
                    min="${this.props.price[0]}" 
                    max="${this.props.price[1]}" 
                    id="customRange1"
                    value="${this.props.price[0]}">
            <input  type="range" 
                    class="form-range two-range" 
                    min="${this.props.price[0]}" 
                    max="${this.props.price[1]}" 
                    id="customRange2"
                    value="${this.props.price[1]}">

             
            <label for="customRange2" class="form-label">Stock</label>
            <div class = "d-flex justify-content-between">
                <span class="badge text-bg-primary">${this.props.stock[0]}</span>
                <span class="badge text-bg-primary">${this.props.stock[1]}</span>
            </div>
            <input  type="range" 
                    class="form-range one-range" 
                    min="${this.props.stock[0]}" 
                    max="${this.props.stock[1]}" 
                    id="customRange3"
                    value = ${this.props.stock[0]}>
            <input  type="range" 
                    class="form-range two-range" 
                    min="${this.props.stock[0]}" 
                    max="${this.props.stock[1]}" 
                    id="customRange4"
                    value = ${this.props.stock[1]}>
        
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Category
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                        <div class="accordion-body">
                            ${this.props.category.map(item => {
                                return `<div class="form-check badge-filter">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label " for="flexCheckDefault">
                                                ${item[0]}
                                            </label>
                                            <span class="badge text-bg-primary">${item[1]}</span>
                                        </div>`;
                            }).join('')}
                        
      
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Brand
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                            <div class="accordion-body">
                                ${this.props.brand.map(item => {
                                    return `<div class="form-check badge-filter">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                <label class="form-check-label " for="flexCheckDefault">
                                                    ${item[0]}
                                                </label>
                                                <span class="badge text-bg-primary">${item[1]}</span>
                                            </div>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>                
            </div>
        </div>
        

        `;
    }
}
