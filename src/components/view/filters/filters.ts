import { IFiltersProps, queryOptions } from "../../interface/interface";
// import noUiSlider from 'nouislider';

export class Filters {


    
        props: IFiltersProps;
        query: queryOptions;
        nextProps: IFiltersProps;
        slaiderPriceFlag: boolean;
        slaiderStockFlag: boolean;
        

    constructor(props: IFiltersProps, query: queryOptions) {
        this.props = props;
        this.nextProps = props;
        this.query = query;
        this.slaiderPriceFlag = false;
        this.slaiderStockFlag = false;
    }


    render() {
        return `
       

        <div class="filters">
            <p class="fs-5 fw-semibold">Found: ${this.props.found ? this.props.found: "not found" } items</p>
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
                        <button id="filter-button-category" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Category
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                        <div class="accordion-body">
                            ${this.props.category.map(item => {
                                return `<div class="form-check badge-filter">
                                            <input class="form-check-input filters_input" type="checkbox" value="${item[0]}" name="category" id="${item[0]}" ${this.query?.category?.includes(String(item[0])) ? "checked" : ""}>
                                            <label class="form-check-label w-75 ${this.nextProps?.category?.filter(itm=> itm[0] === item[0]).length == 0 ? "opacity-50" : ""}" for="${item[0]}">
                                                ${String(item[0]).toUpperCase()}
                                            </label>
                                            <span class="badge text-bg-primary ${this.nextProps?.category?.filter(itm=> itm[0] === item[0]).length == 0 ? "opacity-50" : ""}">
                                            ${this.nextProps?.category?.filter(itm=> itm[0] === item[0]).length>0 ? this.nextProps?.category?.filter(itm=> itm[0] === item[0])[0][1]: 0}
                                            /
                                            ${item[1]}
                                            </span>
                                        </div>`;
                            }).join('')}
                        
      
                        </div>
                    </div>
                </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button id="filter-button-brand" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Brand
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                            <div class="accordion-body">
                                ${this.props.brand.map(item => {
                                    return `<div class="form-check badge-filter">
                                                <input class="form-check-input filters_input" type="checkbox" name="brand" value="${item[0]}" id="${item[0]}" ${this.query?.brand?.includes(String(item[0])) ? "checked" : ""}>
                                                <label class="form-check-label w-75 text-wrap  ${this.nextProps?.brand?.filter(itm=> itm[0] === item[0]).length == 0 ? "opacity-50" : ""}" for="${item[0]}">
                                                    ${item[0]}
                                                </label>
                                                <span class="badge text-bg-primary ${this.nextProps?.brand?.filter(itm=> itm[0] === item[0]).length == 0 ? "opacity-50" : ""}">
                                                ${this.nextProps?.brand?.filter(itm=> itm[0] === item[0]).length>0 ? this.nextProps?.brand?.filter(itm=> itm[0] === item[0])[0][1]: 0}
                                                /
                                                ${item[1]}
                                                </span>
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

    update(props: IFiltersProps){
        this.props.found = props.found;
        this.nextProps = props;
        const prevbuttonCategory = (document.getElementById("filter-button-category") as HTMLElement).getAttribute("aria-expanded");
        const prevbuttonBrand = (document.getElementById("filter-button-brand") as HTMLElement).getAttribute("aria-expanded");


        (document.querySelector(".filters") as HTMLElement).outerHTML =  this.render();

        const buttonCategory = (document.getElementById("filter-button-category") as HTMLElement);
        const divCategory = (document.getElementById("collapseOne") as HTMLElement);

        if (prevbuttonCategory == "true") {
            buttonCategory.classList.remove();
        buttonCategory.classList.add("accordion-button");
        buttonCategory.setAttribute("aria-expanded", "true")
        divCategory.classList.add("show")
        }
        
        const buttonBrand = (document.getElementById("filter-button-brand") as HTMLElement);
        const divBrand = (document.getElementById("collapseTwo") as HTMLElement);
        
        if (prevbuttonBrand == "true") {
            buttonBrand.classList.remove();
        buttonBrand.classList.add("accordion-button");
        buttonBrand.setAttribute("aria-expanded", "true")
        divBrand.classList.add("show")
        }

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