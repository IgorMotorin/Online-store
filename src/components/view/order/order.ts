export class Order {
   
  validation() {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
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
                          <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Last name</label>
                          <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="phone" class="form-label">Phone number </label>
                          <input type="tel" pattern="[+][7]{1}[0-9]{10}" class="form-control" id="phone" placeholder="+71231231212">
                          <div class="invalid-feedback">
                            Please enter a valid phone number for shipping updates.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="email" class="form-label">Email </label>
                          <input type="email" class="form-control" id="email" placeholder="you@example.com">
                          <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="address" class="form-label">Address</label>
                          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                          <div class="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>                        
                      </div>

                     
                      <hr class="my-4">

                      <h4 class="mb-3">Payment</h4>

                      <div class="row gy-3">
                        <div class="col-md-6">
                          <label for="cc-name" class="form-label">Name on card</label>
                          <input type="text" class="form-control" id="cc-name" placeholder="" required>
                          <small class="text-muted">Full name as displayed on card</small>
                          <div class="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>

                        <div class="col-md-6">
                          <label for="cc-number" class="form-label">Credit card number</label>
                          <input type="text" class="form-control" id="cc-number" placeholder="" required>
                          <div class="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>

                        <div class="col-md-3">
                          <label for="cc-expiration" class="form-label">Expiration</label>
                          <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                          <div class="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>

                        <div class="col-md-3">
                          <label for="cc-cvv" class="form-label">CVV</label>
                          <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
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