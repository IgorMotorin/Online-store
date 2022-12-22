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
                    <p class="card-text">${this.props.description}</p>
                </div>

            

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: ${this.props.price} EUR</li>
                    <li class="list-group-item">Discount: ${this.props.discountPercentage} %</li>
                    <li class="list-group-item">Rating: ${this.props.rating}</li>
                    <li class="list-group-item">Stock: ${this.props.stock}</li>
                </ul>
                
            
            
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
        </div>
      `;
    }

}