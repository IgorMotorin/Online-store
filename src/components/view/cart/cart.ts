import { IDataProduct } from "../../interface/interface";
import { Header } from '../header';
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
let sum = 0;
let promo1Display = 'none';
let promo2Display = 'none';


export class Cart {
        props: IDataProduct[];
        propsArr: IDataProduct[];
        header: Header;

        constructor (props: IDataProduct[]){
            this.header = new Header(sum, discont);
            this.props = props;
            this.propsArr = this.props;
        }

    render() {
      listGroupItemsArr = [];
      let productItemCount = '1';
      let productItemPrice = '1'; 
      let cart: {id: string, count: number, price: string}[] = [];
      if (localStorage.cart) {cart = JSON.parse(localStorage.cart);}      
      for (const item of this.propsArr){
        cart.filter((a: any) => {if (item.id === Number(a.id)) {productItemCount = a.count; productItemPrice = String(a.price * a.count);}});
        listGroupItemsArr.push(`<li propsId="${item.id}" class="list-group-item d-flex justify-content-between align-items-start flex-wrap" id="${listGroupItemsArr.length}" style="min-height: 200px">
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
              <span class="badge bg-primary rounded-pill changeItems-count">${productItemCount}</span>                                
              <a class="link-secondary changeItems-addItem" aria-label="Добавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
          </div> 
      </h5>
      <div class="">
          <span>Total:</span> 
          <strong><span class="changeItems-sum">${productItemPrice}</span> EUR</strong>
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
                <span class="text-muted" style="display: flex;
                flex-direction: column;
                justify-content: center"><span class="promoSum">12</span> EUR</span>
            </li>                             
            <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                <h6 class="my-0">Promo code:</h6>
                <div class="promo1" style="display: ${promo1Display}">RSSchool - 10%
                <a class="link-secondary delete-promo1" aria-label="Убавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 69px" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a></div>
                <div class="promo2" style="display: ${promo2Display}">Front-end 2022Q3 - 10%
                <a class="link-secondary delete-promo2" aria-label="Убавить количество товара">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true" style="margin-left: 5px"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a></div>
                <small>Promo: 'RSSchool', 'Front-end 2022Q3'</small>
                </div>
                <span class="text-success" style="display: flex;
                flex-direction: column;
                justify-content: center"><span class="promoDiscont">${discont}</span> EUR</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total payable</span>
                <strong><span class="promoTotalSum">20</span> EUR</strong>
            </li>
        </ul>

        <form class="card p-2">
            <div class="input-group">
                <input id="promo code" type="text" class="form-control" placeholder="Promo code">
                <button onclick="return false" class="btn btn-secondary">Redeem</button>
            </div>
            </form>
        <button type="button" class="btn btn-primary m-2 w-100 discont-button-buy" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
  sum = 0;
  document.querySelectorAll('.changeItems-count').forEach(item => volume += Number(item.innerHTML));
   document.querySelectorAll('.changeItems-sum').forEach(item => sum += Number(item.innerHTML));

   const promo1 =  document.querySelector<HTMLElement>('.promo1');
   const promo2 =  document.querySelector<HTMLElement>('.promo2');
   const promoDiscont = document.querySelector<HTMLElement>('.promoDiscont');
   if (promo1 instanceof HTMLElement && promo1.style.display === 'none' && promo2 instanceof HTMLElement && promo2.style.display === 'flex'){
     (promoDiscont as HTMLElement).innerHTML = String(Math.round(0.1 * sum))
 } else if (promo2 instanceof HTMLElement && promo2.style.display === 'none' && promo1 instanceof HTMLElement && promo1.style.display === 'flex'){
   (promoDiscont as HTMLElement).innerHTML = String(Math.round(0.1 *sum))
} else if (promo1 instanceof HTMLElement && promo1.style.display === 'flex' && promo2 instanceof HTMLElement && promo2.style.display === 'flex'){
 (promoDiscont as HTMLElement).innerHTML = String(Math.round(0.2 * sum))
} else {(promoDiscont as HTMLElement).innerHTML = '0'}
discont = Number((promoDiscont as HTMLElement).innerHTML);

  const promoDiscontHead = Number((document.querySelector('.promoDiscont') as HTMLElement).innerHTML);
  if (document.querySelector('.nav-item') !== null){(document.querySelector('.promoSum') as HTMLElement).innerHTML = `${sum}`;
  (document.querySelector('.promoTotalSum') as HTMLElement).innerHTML = `${sum - promoDiscontHead > 0 ? sum - promoDiscontHead : 0}`; (document.querySelector('.promoItems') as HTMLElement).innerHTML = `${volume}`;
  const head = new Header(sum, volume);
  head.update();  
  return (document.querySelector('.header_button') as HTMLElement).innerHTML = `
    Cart total: ${sum} EUR
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${volume}
      <span class="visually-hidden">Корзина заказов</span>
    </span>`;}

  }
  

    // после удаления продукта корректировка высоты блока контейнера после updateRander
    const itemsOnPage = document.querySelectorAll('.align-items-start').length;
    const listGroupContainer = document.querySelector('.list-group-container');
    if (itemsCount * pageNumber < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {
      (listGroupContainer as HTMLElement).style.height = `${pageNumber > 0 && itemsOnPage % itemsCount === 0 ? itemsCount * 200 : (itemsOnPage % itemsCount) * 200}px`;} 
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
  const itemId = String(changeI.getAttribute("propsId"));
  let cart: {id: string, count: number, price: string}[] = [];
  if (localStorage.cart) {cart = JSON.parse(localStorage.cart);} 
  
  
  
    if (target.closest('.changeItems-addItem')){
      if (count.innerHTML < Number(changeI.querySelector('.ItemStock').innerHTML)) {count.innerHTML = `${Number(count.innerHTML) + 1}`; itemSum.innerHTML = `${Number(itemSum.innerHTML) / (Number(count.innerHTML) - 1) * Number(count.innerHTML)}`;
      cart.filter((item: any) => {if (item.id === itemId) {item.count += 1; }})
      localStorage.cart = JSON.stringify(cart);
      }
    }
    if (target.closest('.changeItems-deleteItem')){
      if (count.innerHTML > 1) {count.innerHTML = `${Number(count.innerHTML) - 1}`; itemSum.innerHTML = `${Number(itemSum.innerHTML) / (Number(count.innerHTML) + 1) * Number(count.innerHTML)}`;
      cart.filter((item: any) => {if (item.id === itemId) { item.count -= 1; }})
      localStorage.cart = JSON.stringify(cart);
      }
    else if (Number(count.innerHTML) === 1) {let indexCart = 0; cart.filter((item: any) => {if (item.id === itemId) {indexCart = cart.indexOf(item)}})
    cart.splice(indexCart, 1);
    localStorage.cart = JSON.stringify(cart);
      this.propsArr.splice(Number(changeI.id), 1);
      (document.querySelector('.main') as HTMLElement).innerHTML = renderThis.render(); renderThis.updateRander();
      
    }}

        
    
    changeHeader();

        
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
    
        
    if (linkNext){
      if (itemsMove / 200 < itemsOnPage - Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove += Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;}
      if (pageNumber < listGroupPages) pageNumber++;
      if (listGroupPages <= pageNumber) {
        if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
    }
    if (linkPrev){
      
      if (itemsMove / 200 >= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML)){itemsMove -= Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200; (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`; }
      if (pageNumber > 1) pageNumber--;
      if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
      if (!itemsOnPage) {(listGroupContainer as HTMLElement).style.height = "300px"; (listGroupContainer as HTMLElement).innerHTML = 
  `<h1 style="align-self: center; text-align: center"> Вы пока не добавили товары в корзину </h1>`}
    }
    if (linkNumber){
      itemsMove = Number((document.querySelector('.dropdown-toggle') as HTMLElement).innerHTML) * 200 * (linkNumber.innerHTML - 1);
      (listGroupNumbered as HTMLElement).style.top = `-${itemsMove}px`;
      pageNumber = Number(linkNumber.innerHTML);
      if (itemsCount < itemsOnPage){(listGroupContainer as HTMLElement).style.height = `${itemsCount * 200}px`} else {(listGroupContainer as HTMLElement).style.height = `${itemsOnPage * 200}px`;}
      if (listGroupPages === pageNumber) {
        if (itemsOnPage % itemsCount !== 0) { (listGroupContainer as HTMLElement).style.height = `${itemsOnPage % itemsCount * 200}px`}}
        
    }
    

  }
  

  (document.querySelector('.discont-container') as HTMLElement).addEventListener('click', discontFunc);

  const promoWrite = <HTMLInputElement>(document.getElementById('promo code'));
    const discontTotal = document.querySelector<HTMLElement>('.promoTotalSum');
    const promoDiscont = document.querySelector<HTMLElement>('.promoDiscont');
    const promo1 =  document.querySelector<HTMLElement>('.promo1');
    const promo2 =  document.querySelector<HTMLElement>('.promo2');
  function discontFunc(event: any){
    
    const target = event.target;
    if (promoWrite.value.toUpperCase() === 'RSSCHOOL' && target.closest('.btn-secondary')) {if (promo1 instanceof HTMLElement && promo1.style.display === 'none'){if (promoDiscont instanceof HTMLElement){discont += Math.round(sum * 0.1); promoDiscont.innerHTML = String(discont); if (discontTotal instanceof HTMLElement) {discontTotal.innerHTML = String(sum - discont)}} (document.querySelector('.promo1') as HTMLElement).style.display = 'flex'; promo1Display = 'flex';}}
    if (promoWrite.value.toUpperCase() === 'FRONT-END 2022Q3' && target.closest('.btn-secondary'))  {if (promo2 instanceof HTMLElement && promo2.style.display === 'none'){if (promoDiscont instanceof HTMLElement){discont += Math.round(sum * 0.1);  promoDiscont.innerHTML = String(discont); if (discontTotal instanceof HTMLElement) {discontTotal.innerHTML = String(sum - discont)}} (document.querySelector('.promo2') as HTMLElement).style.display = 'flex'; promo2Display = 'flex';}}

    if (target.closest('.delete-promo1')){
      {if (promo1 instanceof HTMLElement){promo1.style.display = 'none'; promo1Display = 'none';}
      if (promoDiscont instanceof HTMLElement){discont -= Math.round(sum * 0.1); promoDiscont.innerHTML = String(discont); if (discontTotal instanceof HTMLElement) {discontTotal.innerHTML = String(sum - discont)}}
    }}
    if (target.closest('.delete-promo2')){
      {if (promo2 instanceof HTMLElement){promo2.style.display = 'none'; promo2Display = 'none';}
    }if (promoDiscont instanceof HTMLElement){discont -= Math.round(sum * 0.1); promoDiscont.innerHTML = String(discont); if (discontTotal instanceof HTMLElement) {discontTotal.innerHTML = String(sum - discont)}}
  }
  if (promo1 instanceof HTMLElement && promo1.style.display === 'none' && promo2 instanceof HTMLElement && promo2.style.display === 'none'){
    discont = 0; if (discontTotal instanceof HTMLElement) {discontTotal.innerHTML = String(0);}
  }
   if (discont !== 0){
    (document.querySelector('.promoSum') as HTMLElement).style.textDecoration = 'line-through'} else {(document.querySelector('.promoSum') as HTMLElement).style.textDecoration = 'none'}
   }
  
  
  promoWrite.oninput = function(){
    (document.querySelector('.btn-secondary') as HTMLElement).style.background = '#6c757d'
    if (promoWrite.value.toUpperCase() === 'RSSCHOOL' || promoWrite.value.toUpperCase() === 'FRONT-END 2022Q3'){
      (document.querySelector('.btn-secondary') as HTMLElement).style.background = '#0d6efd'}
    }
  


}
}



