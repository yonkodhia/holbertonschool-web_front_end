// Define stock dictionary
const stock = { macbook: 2, iphone: 4 };

// Define processPayment function
function processPayment(itemName) {
  // Check if stock for item is available
  if (stock[itemName.toLowerCase()] > 0) {
    // Decrease stock for item by 1
    stock[itemName.toLowerCase()]--;
    // Log payment processing message to console
    console.log(`Payment is being processed for item ${itemName}`);
  } else {
    // If stock is not available, call processError function
    processError(itemName);
  }
}

// Define processError function
function processError(itemName) {
  // Log out of stock message to console
  console.log(`No more ${itemName} in stock`);
  // Log payment not being processed message to console
  console.log('Payment is not being processed');
}

// Define processOrder function
function processOrder(itemName, callbackPayment, callbackError) {
  // Log verifying stock message to console
  console.log(`Verifying the stock of ${itemName}`);
  // Check if stock for item is available
  if (stock[itemName.toLowerCase()] > 0) {
    // If stock is available, call callbackPayment function
    callbackPayment(itemName);
  } else {
    // If stock is not available, call callbackError function
    callbackError(itemName);
  }
}

// Prompt user for item to purchase
const itemToPurchase = prompt('Please enter the item you would like to purchase (Macbook, iPhone)').toLowerCase();

// Call processOrder function with appropriate callbacks based on user input
if (itemToPurchase === 'macbook' || itemToPurchase === 'iphone') {
  processOrder(itemToPurchase, processPayment, processError);
} else {
  console.log('Invalid item entered');
}
