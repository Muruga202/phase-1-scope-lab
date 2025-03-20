// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob'; // Declare customerName using var

// function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Access and modify the global customerName
}

// Function to declare bestCustomer globally
var bestCustomer; // Declare bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // Assign it to the global scope
}

// Function to overwrite bestCustomer globally
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Change the bestCustomer variable
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'Alice'; // Declare a constant in global scope

// Attempting to change
function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = 'anybody'; // Attempt to change the constant

}