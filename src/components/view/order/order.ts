// import { Controller } from '../../controller';
// import { Router } from '../../router';
import { queryOptions } from "../../interface/interface";


  


let dateOffLength = 1;

export class Order {
  updateView: (url: URL, query: queryOptions) => void;
  

  constructor(updateView: (url: URL, query: queryOptions) => void) {
    this.updateView = updateView
  }
  
  validation() {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        event.preventDefault()
        form.classList.add('was-validated')
        if (form.checkValidity()) {
          modalContent.innerHTML = '<h1 style="font-size: 70px; text-align: center; font-weight: 600">success!</h1>';
          modalContent.style.height = '570px';
          modalContent.style.justifyContent = 'center';
          setTimeout(() => {
            history.pushState(null, 'cart', location.origin);
            // this.router.readURL();
            // this.controller = new Controller(this.router);
            const url = new URL(location.href);
            this.updateView(url, {});
            // console.log('good')
          }, 3000);
        }
      }, false)
    });
    const modalContent = <HTMLElement>document.querySelector('.modal-content');
    const cardNumber = <HTMLInputElement>document.querySelector('.cardNumber');
    const dateOff = <HTMLInputElement>document.querySelector('.dateOff');
    const cvv = <HTMLInputElement>document.querySelector('.cvv');
    const visa = <HTMLElement>document.querySelector('.visa');
    const mastercard = <HTMLElement>document.querySelector('.mastercard');
    const americanExpress = <HTMLElement>document.querySelector('.americanExpress');

    if (dateOff){ dateOff.oninput = function(){
      if (dateOff.value.length === 2 && dateOffLength < 2) {
        if (Number(dateOff.value) > 12){
          dateOff.value = dateOff.value[0];
        } else {dateOffLength = dateOff.value.length; dateOff.value += '/';}
      }
      if (dateOff.value.length === 2 && dateOffLength === 3){dateOff.value = dateOff.value[0];}
      if (dateOff.value.length === 6){const temp = dateOff.value.split(''); temp.pop(); dateOff.value = temp.join('');}
      dateOffLength = dateOff.value.length;
      }
      if (cvv){ cvv.oninput = function(){
        if (cvv.value.length === 4){const tempC = cvv.value.split(''); tempC.pop(); cvv.value = tempC.join('');}
      }}}

      if (cardNumber){ cardNumber.oninput = function(){
          if (!cardNumber.value){
          visa.style.display = 'none';
          mastercard.style.display = 'none';
          americanExpress.style.display = 'none';
         }
         if (Number(cardNumber.value[0]) === 4){
          visa.style.display = 'flex'
         } else if (Number(cardNumber.value[0]) === 5){
          mastercard.style.display = 'flex'
         } else if (Number(cardNumber.value[0]) === 3){
          americanExpress.style.display = 'flex'
         }
        //  if (cardNumber.value.length === 4 ||  cardNumber.value.length === 9 ||  cardNumber.value.length === 14){ if (cardNumber.value.length > cardNumberLength) {
        //   cardNumber.value += ' ';} else { const tempCard = cardNumber.value.split(''); tempCard.pop(); cardNumber.value = tempCard.join('');}}

         if (cardNumber.value.length === 17){const tempCard = cardNumber.value.split(''); tempCard.pop(); cardNumber.value = tempCard.join('');}

        //  cardNumberLength = cardNumber.value.length;
      }
      
      

    }
      
  }


render() {
    return `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Billing address</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">             
              <div class="container">                                      
                    <form class="needs-validation" novalidate>
                      <div class="row g-3">
                        <div class="col-sm-6">
                          <label for="firstName" class="form-label">First name</label>
                          <input type="text" minlength="3" class="form-control" id="firstName" placeholder="Sherlock" value="" required>
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Last name</label>
                          <input type="text" minlength="3" class="form-control" id="lastName" placeholder="Holmes" value="" required>
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="phone" class="form-label">Phone number </label>
                          <input type="tel" pattern="[+][0-9]{9,}" class="form-control tel" id="phone" placeholder="+712312312" required>
                          <div class="invalid-feedback">
                            Please enter a valid phone number for shipping updates.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="email" class="form-label">Email </label>
                          <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                          <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="address" class="form-label">Address</label>
                          <input type="text" pattern="[A-Za-z0-9]{5,}[ ][A-Za-z0-9]{5,}[ ][A-Za-z0-9]{5,}" class="form-control" id="address" placeholder="Baker street London" required>
                          <div class="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>                        
                      </div>

                     
                      <hr class="my-4">

                      <h4 class="mb-3">Payment</h4>

                      <div class="row gy-3">
                        <div class="col-md-6">
                          <label for="cc-number" class="form-label">Credit card number</label>
                          <input type="text" pattern="[0-9]{16}" class="form-control cardNumber" id="cc-number" placeholder="1234567890123456" required>
                          <div class="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                        <div class="col-md-6">
                        <img src="visaLogo.png" alt="Visa" style="width: 80%; display: none" class="visa">
                        <img src="mastercardLogo.png" alt="mastercard" style="width: 50%; display: none" class="mastercard">
                        <img src="AmericanExpressLogo.png" alt="American Express" style="width: 50%; display: none" class="americanExpress">
                        </div>

                        <div class="col-md-3">
                          <label for="cc-expiration" class="form-label">Expiration</label>
                          <input type="text" pattern="[0-9]{2}[/][0-9]{2}" class="form-control dateOff" id="cc-expiration" placeholder="12/22" required>
                          <div class="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>

                        <div class="col-md-3">
                          <label for="cc-cvv" class="form-label">CVV</label>
                          <input type="text" pattern="[0-9]{3,}" class="form-control cvv" id="cc-cvv" placeholder="123" required>
                          <div class="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div>
                      <hr class="my-4">
                      <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>                               
              </div>
        </div>        
      </div>
    </div>
  </div>
  `;
}

}