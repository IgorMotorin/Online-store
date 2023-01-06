import { IDataProduct } from "../../interface/interface";

export class ProductDetails {
        props: IDataProduct;

        constructor (props: IDataProduct){
            this.props = props;
        }

    render() {
        // console.log("999", this.props)
        // <img src="${this.props.thumbnail}" style="max-height: 300px" class="img-fluid rounded" alt="...">
        const temp1 =  `<img src=${this.props.thumbnail} class="card-img-top h-25" alt="...">`;
        const temp2 =  `<div class="card-img-top" style="background: url(${this.props.thumbnail});height: 200px;background-size: contain;background-repeat: no-repeat;background-position: center;"></div>`;
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
                                <button type="button" data-bs-target="#carouselExampleIndicators" style ="background-color: #0d6efd" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                ${this.props.images
                                    .map((item, idx)=>{return `<button type="button" data-bs-target="#carouselExampleIndicators" style ="background-color: #0d6efd" data-bs-slide-to="${idx + 1}" aria-label="Slide ${idx + 2}"></button>`
                                                }).join("")}
                            </div>
                            <div class="carousel-inner" style="height: 500px; max-width: 500px">
                                <div class="carousel-item active">
                                    <img src="${this.props.thumbnail}"  class="img-fluid rounded productDetails_img" alt="...">
                                </div>
                                ${this.props.images
                                    .map(item=>{return `<div class="carousel-item">
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
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            BUY NOW
                        </button>                        
                    </div>
                </div>

            
            
                
        </div>
        
      `;
    }

}