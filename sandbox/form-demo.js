function validateForm(event) {
  // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
  const theForm = event.target;
  // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
  // To keep it from happening we can can call e.preventDefault()
  // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
  const errors = [];
  // start by assuming the form is valid.
  let isValid = true;
  // add our validations here

  // if we ran into any problems above valid will be false.
  if (!isValid) {
    //stop the form from being submitted
    event.preventDefault();
    // show the errors
    showErrors(errors);
    // return false to let the browser know the form was not submitted.
    return false;
  }
}

function togglePaymentDetails() {
  const theForm = document.querySelector("#checkoutForm");

  const creditCardContainer = document.querySelector("#creditCardContainer");
  const paypalContainer = document.querySelector("#paypal");
  const paymentMethod = document.querySelector("#paymentMethod");

  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  theForm.creditCard.required = false;
  theForm.paypalUsername.required = false;

  if (paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCard.required = true;
  } else if (paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// helper function to display our errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);

document.querySelector("#checkoutForm").addEventListener("submit", validateForm);