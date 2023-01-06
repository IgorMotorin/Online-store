import { IDataProduct } from "../../interface/interface";

export class Card {
        props: IDataProduct;

        constructor (props: IDataProduct){
            this.props = props;
        }

    render() {
        
        const temp1 =  `<img src=${this.props.thumbnail} class="card-img-top h-25" alt="...">`;
        const temp2 =  `<div class="card-img-top" style="background: url(${this.props.thumbnail});height: 200px;background-size: contain;background-repeat: no-repeat;background-position: center;"></div>`;
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-img-top" style="background: url(${this.props.thumbnail});height: 180px;background-size: contain;background-repeat: no-repeat;background-position: top;"></div>
            

            
                <div class="card-body h-25">
                    <h5 class="card-title">${this.props.title}</h5>                    
                    <small class="card-text">${this.props.description}</small>
                </div>

            

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: ${this.props.price} EUR</li>
                    <li class="list-group-item">Discount: ${this.props.discountPercentage} %</li>
                    <li class="list-group-item">Rating: ${this.props.rating}</li>
                    <li class="list-group-item">Stock: ${this.props.stock}</li>
                </ul>
                
            
            
                <div class="card-body">
                    <button class="btn btn-primary card_buttonAdd">Add to cart</button>
                    <button class="btn btn-primary card_buttonDetails">Details</button>
                </div>
        </div>
      `;
    }

}


export class CardH {
    props: IDataProduct;

    constructor (props: IDataProduct){
        this.props = props;
    }

render() {
    
    const temp1 =  `<img src=${this.props.thumbnail} class="card-img-top h-25" alt="...">`;
    const temp2 =  `<div class="card-img-top" style="background: url(${this.props.thumbnail});height: 200px;background-size: contain;background-repeat: no-repeat;background-position: center;"></div>`;
    return `
                <li class="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                    <div class="col-md-2 m-2">
                        <img src="${this.props.thumbnail}" class="img-fluid rounded" alt="...">                                
                    </div>                    
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${this.props.title}</div>                                               
                        <ul class="list-group list-group-horizontal fs-6 lh-1 m-1">
                            <li class="list-group-item"><small>Price: ${this.props.price} EUR</small></li>
                            <li class="list-group-item"><small>Discount: ${this.props.discountPercentage} %</small></li>
                            <li class="list-group-item"><small>Rating: ${this.props.rating}</small></li>
                            <li class="list-group-item"><small>Stock: ${this.props.stock}</small></li>
                        </ul>
                    </div>
                    <div>
                        <div class="card-body">
                            <button class="btn btn-primary btn-sm card_buttonAdd">Add to cart</button>
                            <button class="btn btn-primary btn-sm card_buttonDetails">Details</button>
                        </div>
                    </div>                
                </li>
  `;
}

}