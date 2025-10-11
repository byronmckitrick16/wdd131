function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector("#errorMsg").innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault();
	checkError();
	checkDate();
	const inputElements = document.querySelectorAll(".input")
	inputElements.forEach((input) =>
	input.value = "");
}

function checkError() {
	let errorMsg = " "
	const cardNumber = document.querySelector("#cardNumber")
	// clear any previous errors
	displayError(" ")
	// check credit card number
	if (isNaN(cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	};
	return true
};

function checkDate() {
	let errorMsg = ""
	const currentDate = new Date();
	const month = currentDate.getMonth();
	const realMonth = month + 1
	const year = currentDate.getFullYear();

	const monthEl = document.querySelector("#expirationMonth");
	const yearEl = document.querySelector("#expirationYear");

	if (year > yearEl.value) {
		errorMsg += "Expiration date is not a vaid date"
	} else if (year == yearEl.value && realMonth > monthEl.value) {
		errorMsg += "Expiration date is not a vaid date"
	}
	if (errorMsg !== "") {
		displayError(errorMsg)
		return false
	};
	return true
}

document.querySelector(".submitButton").addEventListener("click", submitHandler)