import { IDataProduct } from "../../interface/interface";

export class Cart {
        props: IDataProduct;

        constructor (props: IDataProduct){
            this.props = props;
        }

    render() {
        
        return `

        <div class="container">

        <div class = "d-flex">
            <nav class= "ms-auto" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>           
            <div class="dropstart ms-auto">
                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    5
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">3</a></li>
                    <li><a class="dropdown-item" href="#">5</a></li>
                    <li><a class="dropdown-item" href="#">10</a></li>
                    <li><a class="dropdown-item" href="#">15</a></li>
                    <li><a class="dropdown-item" href="#">20</a></li>
                </ul>  
            </div>

            
        </div>
            

            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                    <div class="col-md-2 m-2">
                        <img src="${this.props.thumbnail}" class="img-fluid rounded" alt="...">            
                    </div>
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${this.props.title}</div>
                        ${this.props.description}
                        <ul class="list-group list-group-horizontal fs-6 lh-1 m-1">
                            <li class="list-group-item"><small>Price: ${this.props.price} EUR</small></li>
                            <li class="list-group-item"><small>Discount: ${this.props.discountPercentage} %</small></li>
                            <li class="list-group-item"><small>Rating: ${this.props.rating}</small></li>
                            <li class="list-group-item"><small>Stock: ${this.props.stock}</small></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex gap-2">                                
                                <a class="link-secondary" href="#" aria-label="Убавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                                <span class="badge bg-primary rounded-pill">3</span>                                
                                <a class="link-secondary" href="#" aria-label="Добавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </div> 
                        </h5>
                        <div class="">
                            <span>Total:</span> 
                            <strong>20 EUR</strong>
                        </div>
                    </div>                
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                    <div class="col-md-2 m-2">
                        <img src="${this.props.thumbnail}" class="img-fluid rounded" alt="...">            
                    </div>
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${this.props.title}</div>
                        ${this.props.description}
                        <ul class="list-group list-group-horizontal fs-6 lh-1 m-1">
                            <li class="list-group-item"><small>Price: ${this.props.price} EUR</small></li>
                            <li class="list-group-item"><small>Discount: ${this.props.discountPercentage} %</small></li>
                            <li class="list-group-item"><small>Rating: ${this.props.rating}</small></li>
                            <li class="list-group-item"><small>Stock: ${this.props.stock}</small></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex gap-2">                                
                                <a class="link-secondary" href="#" aria-label="Убавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                                <span class="badge bg-primary rounded-pill">3</span>                                
                                <a class="link-secondary" href="#" aria-label="Добавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </div> 
                        </h5>
                        <div class="">
                            <span>Total:</span> 
                            <strong>20 EUR</strong>
                        </div>
                    </div>                
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                    <div class="col-md-2 m-2">
                        <img src="${this.props.thumbnail}" class="img-fluid rounded" alt="...">            
                    </div>
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${this.props.title}</div>
                        ${this.props.description}
                        <ul class="list-group list-group-horizontal fs-6 lh-1 m-1">
                            <li class="list-group-item"><small>Price: ${this.props.price} EUR</small></li>
                            <li class="list-group-item"><small>Discount: ${this.props.discountPercentage} %</small></li>
                            <li class="list-group-item"><small>Rating: ${this.props.rating}</small></li>
                            <li class="list-group-item"><small>Stock: ${this.props.stock}</small></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex gap-2">                                
                                <a class="link-secondary" href="#" aria-label="Убавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                                <span class="badge bg-primary rounded-pill">3</span>
                                <a class="link-secondary" href="#" aria-label="Добавить количество товара">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </div> 
                        </h5>
                        <div class="">
                            <span>Total:</span> 
                            <strong>20 EUR</strong>
                        </div>
                    </div>                
                </li>
            </ol>
           
            
                    
            
            <div class="col-md-5 col-lg-4 order-md-last m-auto mt-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Your cart</span>
                <span class="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                        <h6 class="my-0">Total</h6>
                        <small class="text-muted">goods for the amount</small>
                        </div>
                        <span class="text-muted">12 EUR</span>
                    </li>                             
                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                        <h6 class="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">−5 EUR</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total payable</span>
                        <strong>20 EUR</strong>
                    </li>
                </ul>
    
                <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Promo code">
                        <button type="submit" class="btn btn-secondary">Redeem</button>
                    </div>
                </form>
                <button type="button" class="btn btn-primary m-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    BUY NOW
                </button>
            </div>
                        
        
        </div>
      `;
    }

}