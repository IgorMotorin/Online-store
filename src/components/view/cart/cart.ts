import { IDataProduct } from "../../interface/interface";
// import { Event } from "../../interface/interface";
// import { Main } from "../main"


let itemsMove = 0;
let itemsCount = 5;
let listGroupPages: number;
let listGroupPagesRender = '';
let listGroupItems: string;
let listGroupItemsArr: string[];
let propsArr: IDataProduct[];
let pageNumber = 1;
let discont = 0;

export class Cart {
        props: IDataProduct[];
        propsArr: IDataProduct[];
        
        // main = new Main;

        constructor (props: IDataProduct[]){
            
            this.props = props;
            this.propsArr = this.props;
            
            
            

        }

    render() {
      listGroupItemsArr = [];
      for (const item of this.propsArr){listGroupItemsArr.push(`<li class="list-group-item d-flex justify-content-between align-items-start flex-wrap" id="${listGroupItemsArr.length}" style="min-height: 200px">
      <div class="col-md-2 m-2" style="display: flex; align-self: center">
      <img src="${item.thumbnail}" class="img-fluid rounded" alt="..." style="max-height: 150px;">            
  </div>
  <div class="ms-2 me-auto " style="height: 100%; display: flex; flex-direction: column; justify-content: space-around">
      <div class="fw-bold" style="font-size: 24px; margin-top: 8px">${item.title}</div>
      <h4 style="max-width: 400px; font-size: 12px">${item.description}</h4>
      <ul class="list-group list-group-horizontal fs-6 lh-1 m-1" style="margit-bottom: 20px">
          <li class="list-group-item"><small>Price: <span class="ItemPrice">${item.price}</span> EUR</small></li>
          <li class="list-group-item"><small>Discount: <span class="ItemDiscount">${item.discountPercentage}</span> %</small></li>
          <li class="list-group-item"><small>Rating: <span class="ItemRating">${item.rating}</span></small></li>
          <li class="list-group-item"><small>Stock: <span class="ItemStock">${item.stock}</span></small></li>
      </ul>
  </div>
  <div class="changeItems" style="display: flex; flex-direction: column; align-items: end; margin-top: 8px">
      <h5 class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex gap-2">                                
              <a class="link-secondary changeItems-deleteItem" aria-label="Убавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
              <span class="badge bg-primary rounded-pill changeItems-count">1</span>                                
              <a class="link-secondary changeItems-addItem" aria-label="Добавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
          </div> 
      </h5>
      <div class="">
          <span>Total:</span> 
          <strong><span class="changeItems-sum">${item.price}</span> EUR</strong>
      </div>
  </div>                
</li>
`);}
listGroupPages = Math.ceil(listGroupItemsArr.length / itemsCount);
listGroupItems = listGroupItemsArr.join('');
listGroupPagesRender = '';
for (let i = 1; i <= listGroupPages; i ++) { listGroupPagesRender += `<li class="page-item"><a class="page-link page-link-number" >${i}</a></li>` }

function finalRender(){
  return `

<div class="container">

<div class = "d-flex switchPages">
    <nav class= "ms-auto" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link page-link-previous">Previous</a></li>
            ${listGroupPagesRender}
            <li class="page-item"><a class="page-link page-link-next" >Next</a></li>
        </ul>
    </nav>           
    <div class="dropstart ms-auto">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${itemsCount}
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" >1</a></li>
            <li><a class="dropdown-item" >3</a></li>
            <li><a class="dropdown-item" >5</a></li>
            <li><a class="dropdown-item" >10</a></li>
            <li><a class="dropdown-item" >15</a></li>
            <li><a class="dropdown-item" >20</a></li>
        </ul>  
    </div>

    
</div>
    
  <div class="list-group-container" style="height: ${itemsCount * 200}px; overflow: hidden; position: relative; display: flex; justify-content: center">
    <ol class="list-group list-group-numbered" style="position: absolute; top: -${itemsMove}px">
    ${listGroupItems}
        
    </ol>
  </div>
    
            
    
    <div class="col-md-5 col-lg-4 order-md-last m-auto mt-4 discont-container">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill promoItems">3</span>
        </h4>
        <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Total</h6>
                <small class="text-muted">goods for the amount</small>
                </div>
                <span class="text-muted promoSum">12 EUR</span>
            </li>                             
            <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                <h6 class="my-0">Promo code:</h6>
                <div class="promo1" style="">Rolling Scopes School - 10%
                <a class="link-secondary changeItems-deleteItem" aria-label="Убавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a></div>
                <div class="promo1">Front-end 2022Q3 - 10%
                <a class="link-secondary changeItems-deleteItem" aria-label="Убавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a></div>
                <small>Promo for test: 'RS', '2022Q3'</small>
                </div>
                <span class="text-success"><span class="promoDiscont">${discont}</span> EUR</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total payable</span>
                <strong class="promoTotalSum">20 EUR</strong>
            </li>
        </ul>

        <form class="card p-2">
            <div class="input-group">
                <input id="promo code" type="text" class="form-control" placeholder="Promo code">
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

        
        return finalRender()
      
      
      
    }    


updateRander(){
  
  
  function changeHeader(){
    let volume = 0;
    document.querySelectorAll('.changeItems-count').forEach(item => volume += Number(item.innerHTML));
    let sum = 0;
    document.querySelectorAll('.changeItems-sum').forEach(item => sum += Number(item.innerHTML));
    const promoDiscont = Number((document.querySelector('.promoDiscont') as HTMLElement).innerHTML);
    if (document.querySelector('.nav-item') !== null){(document.querySelector('.promoSum') as HTMLElement).innerHTML = `${sum} EUR`;
    (document.querySelector('.promoTotalSum') as HTMLElement).innerHTML = `${sum - promoDiscont > 0 ? sum - promoDiscont : 0}`; (document.querySelector('.promoItems') as HTMLElement).innerHTML = `${volume}`;
    return (document.querySelector('.nav-item') as HTMLElement).innerHTML = `<button type="button" class="btn btn-primary position-relative header_button">
    Cart total: ${sum} EUR
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${volume}
      <span class="visually-hidden">Корзина заказов</span>
    </span>
    </button>`;}

  }
  
  

    // document.querySelectorAll('.align-items-start').forEach(element => { element.addEventListener('click', changeItem);
    // });

    // после удаления продукта корректировка высоты блока контейнера после updateRander
    const itemsOnPage = document.querySelectorAll('.align-items-start').length;
    const listGroupContainer = document.querySelector('.list-group-container');
    if (itemsCount * pageNumber < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {
      console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount, (itemsOnPage % itemsCount) * 200); (listGroupContainer as HTMLElement).style.height = `${pageNumber > 0 && itemsOnPage % itemsCount === 0 ? itemsCount * 200 : (itemsOnPage % itemsCount) * 200}px`;} 
    if (listGroupPages < pageNumber) {pageNumber--;itemsMove -= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (document.querySelector('.list-group-numbered') as HTMLElement).style.top = `-${itemsMove}px`; }
    if (!itemsOnPage) {(listGroupContainer as HTMLElement).style.height = "300px"; (listGroupContainer as HTMLElement).innerHTML = 
  `<h1 style="align-self: center; text-align: center"> Вы пока не добавили товары в корзину </h1>`}
// .......................
  const renderThis = this;

  
  const changeItem = (event: any) => {
  const target = event.target;  
  const changeI = event.target.closest('.align-items-start');
  const count = changeI.querySelector('.changeItems-count');
  const itemSum = changeI.querySelector('.changeItems-sum');
  

    if (target.closest('.changeItems-addItem')){
      if (count.innerHTML < Number(changeI.querySelector('.ItemStock').innerHTML)) {count.innerHTML = `${Number(count.innerHTML) + 1}`; itemSum.innerHTML = `${Number(itemSum.innerHTML) / (Number(count.innerHTML) - 1) * Number(count.innerHTML)}`}
    }
    if (target.closest('.changeItems-deleteItem')){
      if (count.innerHTML > 1) {count.innerHTML = `${Number(count.innerHTML) - 1}`; itemSum.innerHTML = `${Number(itemSum.innerHTML) / (Number(count.innerHTML) + 1) * Number(count.innerHTML)}`}
    else if (Number(count.innerHTML) === 1) {console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount); this.propsArr.splice(Number(changeI.id), 1);
      (document.querySelector('.container main') as HTMLElement).innerHTML = renderThis.render(); renderThis.updateRander();
      
    }}
    
    
    
    changeHeader()
  }

  document.querySelectorAll('.align-items-start').forEach(element => { element.addEventListener('click', changeItem);
    });


  changeHeader();
  
  
  
  (document.querySelector('.switchPages') as HTMLElement).addEventListener('click', switchPages)

  function switchPages(event: any){
    const target = event.target;
    if (target.closest('.dropdown-item')){ itemsCount = Number(target.closest('.dropdown-item').innerHTML);}
    else { itemsCount = Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML);}
    const itemsOnPage = document.querySelectorAll('.align-items-start').length;
    const linkNext = target.closest('.page-link-next');
    const linkPrev = target.closest('.page-link-previous');
    const linkNumber = target.closest('.page-link-number');
    const listGroupContainer = document.querySelector('.list-group-container');
    const listGroupNumbered = document.querySelector('.list-group-numbered');
    if (target.closest('.dropdown-item')){
      (document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML = String(itemsCount);
      listGroupPages = Math.ceil(itemsOnPage / itemsCount);
      listGroupPagesRender = '';
      for (let i = 1; i <= listGroupPages; i ++) {listGroupPagesRender += `<li class="page-item"><a class="page-link page-link-number" >${i}</a></li>` }
      (document.querySelector('.pagination') as HTMLElement).innerHTML =  `<li class="page-item"><a class="page-link page-link-previous">Previous</a></li>
      ${listGroupPagesRender}
      <li class="page-item"><a class="page-link page-link-next" >Next</a></li>`;
      itemsMove = 0;
      (listGroupNumbered as HTMLElement).style.top = `0px`;

    if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
    }
    console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
        
    if (linkNext){
      if (itemsMove / 200 < itemsOnPage - Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove += Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;}
      if (pageNumber < listGroupPages) pageNumber++;
      if (listGroupPages <= pageNumber) {console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
        if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
    }
    if (linkPrev){
      console.log(pageNumber, listGroupPages);
      if (itemsMove / 200 >= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove -= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`; }
      if (pageNumber > 1) pageNumber--;
      if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
    }
    if (linkNumber){
      itemsMove = Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200 * (linkNumber.innerHTML - 1);
      (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;
      pageNumber = Number(linkNumber.innerHTML);
      if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
      if (listGroupPages === pageNumber) {console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
        if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
        
    }
    

  }

  (document.querySelector('.discont-container') as HTMLElement).addEventListener('click', discontFunc);
  
  function discontFunc(event: any){
    // const target = event.target;
    // if (target.closest('.dropdown-item')){ itemsCount = Number(target.closest('.dropdown-item').innerHTML);}
    // else { itemsCount = Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML);}
    // const itemsOnPage = document.querySelectorAll('.align-items-start').length;
    // const linkNext = target.closest('.page-link-next');
    // const linkPrev = target.closest('.page-link-previous');
    // const linkNumber = target.closest('.page-link-number');
    // const listGroupContainer = document.querySelector('.list-group-container');
    // const listGroupNumbered = document.querySelector('.list-group-numbered');
    // if (target.closest('.dropdown-item')){
    //   (document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML = String(itemsCount);
    //   listGroupPages = Math.ceil(itemsOnPage / itemsCount);
    //   listGroupPagesRender = '';
    //   for (let i = 1; i <= listGroupPages; i ++) {listGroupPagesRender += `<li class="page-item"><a class="page-link page-link-number" >${i}</a></li>` }
    //   (document.querySelector('.pagination') as HTMLElement).innerHTML =  `<li class="page-item"><a class="page-link page-link-previous">Previous</a></li>
    //   ${listGroupPagesRender}
    //   <li class="page-item"><a class="page-link page-link-next" >Next</a></li>`;
    //   itemsMove = 0;
    //   (listGroupNumbered as HTMLElement).style.top = `0px`;

    // if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
    // }
    // console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
        
    // if (linkNext){
    //   if (itemsMove / 200 < itemsOnPage - Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove += Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;}
    //   if (pageNumber < listGroupPages) pageNumber++;
    //   if (listGroupPages <= pageNumber) {console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
    //     if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
    // }
    // if (linkPrev){
    //   console.log(pageNumber, listGroupPages);
    //   if (itemsMove / 200 >= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove -= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`; }
    //   if (pageNumber > 1) pageNumber--;
    //   if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
    // }
    // if (linkNumber){
    //   itemsMove = Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200 * (linkNumber.innerHTML - 1);
    //   (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;
    //   pageNumber = Number(linkNumber.innerHTML);
    //   if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
    //   if (listGroupPages === pageNumber) {console.log(pageNumber, listGroupPages, itemsOnPage, itemsCount);
    //     if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
        
    // }
    

  }
  
}
}



