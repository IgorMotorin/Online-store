import { IFiltersProps } from "../../interface/interface";
// import noUiSlider from 'nouislider';

export class Filters {


    
        props: IFiltersProps;
        

    constructor(props: IFiltersProps) {
        this.props = props;        
    }


    render() {
        return `
       

        <div class="filters">
            <p class="fs-5 fw-semibold">Found: 26 items</p>
            <div class = "d-flex flex-row gap-1">
                <button id="filter-reset" type="button" class="btn btn-outline-primary btn-sm flex-fill">Reset filters</button>
                <button id="filter-copy" type="button" class="btn btn-outline-primary btn-sm flex-fill">Copy link</button>
            </div>
        
            <form id="filtersForm">
            <label for="customRange2" class="form-label">Price</label>
            <div class = "d-flex justify-content-between">
                <span id="price-min" class="badge text-bg-primary">${this.props.price[0]}</span>
                <span id="price-max" class="badge text-bg-primary">${this.props.price[1]}</span>
            </div>         
           
            <div id="slider-price" class="slider"></div>
             
            <label for="customRange2" class="form-label">Stock</label>
            <div class = "d-flex justify-content-between">
                <span id="stock-min" class="badge text-bg-primary">${this.props.stock[0]}</span>
                <span id="stock-max" class="badge text-bg-primary">${this.props.stock[1]}</span>
            </div>
            
            <div id="slider-stock" class="slider"></div>
        
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
                                            <input class="form-check-input filters_input" type="checkbox" value="${item[0]}" name="category" id="${item[0]}">
                                            <label class="form-check-label " for="${item[0]}">
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
                                                <input class="form-check-input filters_input" type="checkbox" name="brand" value="${item[0]}" id="${item[0]}">
                                                <label class="form-check-label " for="${item[0]}">
                                                    ${item[0]}
                                                </label>
                                                <span class="badge text-bg-primary">${item[1]}</span>
                                            </div>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>                
            </div>
            </form>
        </div>
        

        `;
    }
}



// <input  type="range" 
// class="form-range one-range filters_input" 
// min="${this.props.price[0]}" 
// max="${this.props.price[1]}" 
// id="customRange1"
// name = "price"
// value="${this.props.price[0]}">
// <input  type="range" 
// class="form-range two-range filters_input" 
// min="${this.props.price[0]}" 
// max="${this.props.price[1]}" 
// id="customRange2"
// name = "price"
// value="${this.props.price[1]}">



// <input  type="range" 
//                     class="form-range one-range filters_input" 
//                     min="${this.props.stock[0]}" 
//                     max="${this.props.stock[1]}" 
//                     id="customRange3"
//                     name = "stock"
//                     value = ${this.props.stock[0]}>
//             <input  type="range" 
//                     class="form-range two-range filters_input" 
//                     min="${this.props.stock[0]}" 
//                     max="${this.props.stock[1]}" 
//                     id="customRange4"
//                     name = "stock"
//                     value = ${this.props.stock[1]}>