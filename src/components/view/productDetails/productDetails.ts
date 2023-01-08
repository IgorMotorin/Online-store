import { IDataProduct } from "../../interface/interface";

export class ProductDetails {
        props: IDataProduct;

        constructor (props: IDataProduct){
            this.props = props;
        }

    render() {
        const obj = {flag: false}
        if (localStorage.cart) {
            const cart: {id: string, count: number, price: string}[] = JSON.parse(localStorage.cart)
            const cartIndex = cart.findIndex(item => item.id === String(this.props.id));
            if (cartIndex !== -1) {obj.flag = true} 
          }
                
        return `
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Online-store</a></li>
                <li class="breadcrumb-item"><a href="/?category=${this.props.category}">${this.props.category.toUpperCase()}</a></li>
                <li class="breadcrumb-item"><a href="/?brand=${this.props.brand}">${this.props.brand}</a></li>
                <li class="breadcrumb-item active" aria-current="page">${this.props.title}</li>
            </ol>
        </nav>
        
 
        
        <div class="d-flex justify-content-between  align-items-start flex-wrap">
            
            
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                       
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-indicators" >                                
                                ${this.props.images
                                    .map((item, idx)=>{return `<button type="button" data-bs-target="#carouselExampleIndicators" style ="background-color: #0d6efd" ${idx==0 ? "class='active' aria-current='true'":""} data-bs-slide-to="${idx}" aria-label="Slide ${idx + 1}"></button>`
                                                }).join("")}
                            </div>
                            <div class="carousel-inner" style="height: 500px; max-width: 500px">                                
                                ${this.props.images
                                    .map((item, idx)=>{return `<div class="carousel-item ${idx==0 ? "active": ""}">
                                                            <img src="${item}" class=" img-fluid rounded productDetails_img" alt="...">
                                                        </div>`
                                                }).join("")}
                                
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" style ="background-color: #0d6efd; opacity: 0.5;" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" style ="background-color: #0d6efd; opacity: 0.5;" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>    
                    
                       
                    </div>

                    <div class="col-md-6 ps-3 mt-2">
                    <h5 class="fw-bold ps-2">${this.props.title}</h5>
                    <p class="ps-2">${this.props.description}</p>
                    <ul class="list-group fs-6 lh-1 m-1 list-group-flush">
                        <li class="list-group-item"><p>Price: ${this.props.price} EUR</p></li>
                        <li class="list-group-item"><p>Discount: ${this.props.discountPercentage} %</p></li>
                        <li class="list-group-item"><p>Rating: ${this.props.rating}</p></li>
                        <li class="list-group-item"><p>Stock: ${this.props.stock}</p></li>
                        <li class="list-group-item"><p>Brand: ${this.props.brand}</p></li>
                        <li class="list-group-item"><p>Category: ${this.props.category}</p></li>
                    </ul>
                    <div class="card-body">
                        <button cart="${obj.flag}" id="${this.props.id}" price="${this.props.price}" class="btn btn-primary card_buttonAdd ${obj.flag ? "btn-secondary":""}">${obj.flag ? "From cart":"Add to cart"}</button>
                        <button id="${this.props.id}" price="${this.props.price}" type="button" class="btn btn-primary m-2 details_buttonBuy card_buttonAdd" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            BUY NOW
                        </button>                        
                    </div>
                </div>

            
            
                
        </div>
        
      `;
    }

}