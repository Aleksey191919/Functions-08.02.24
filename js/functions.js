/** @format */

function showProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
  }
}

function getInputNumber(userMessage, min, max) {
  let number;
  do {
    number = parseInt(prompt(userMessage));
  } while (number < min || number > max || isNaN(number));
  return number;
}

function getProductNumber(products) {
  return getInputNumber('Enter product number', 1, products.length);
}

function getProductAmount(productToBuy) {
  return getInputNumber(
    'Enter amount of products you wanna buy',
    1,
    productToBuy.availability
  );
}

// function getProductNumber(products) {
//   let productNumber;
//   do {
//     productNumber = parseInt(prompt('Enter product number'));
//   } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
//   return productNumber;
// }

// function getProductAmount(productToBuy) {
//   let productAmount;
//   do {
//     productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
//   } while(productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
//   return productAmount;
// }

function calculatePrice(productToBuy, productAmount) {
  return productToBuy.price * productAmount;
}

function showFinalPrice(price, discount) {
  const finalPrice = price - price * discount;
  return finalPrice;
}

function ifDiscount(price, discountStartsFrom, discount) {
  let finalPrice = price;
  if (price >= discountStartsFrom) {
    finalPrice = price - price * discount;
    console.log(
      `Congrats! You get a discount. Your final price is ${finalPrice}`
    );
  } else {
    console.log(`The final price is ${finalPrice}`);
  }
}
