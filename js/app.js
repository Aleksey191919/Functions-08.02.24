/**
 * +0) prepare data
 * +1) show all products with prices
 * +2) show prompt with request to enter product number (validation)
 * +3) show prompt with request to enter product amount (validation)
 * +4) calculate price
 * +5) check if discount available
 * +6) if so - calculate discount
 * +7) then show final price
 *
 * @format
 */

// 1
showProducts(products);

// 2
const productNumber = getProductNumber(products);
const productToBuy = products[productNumber - 1];

// 3
const productAmount = getProductAmount(productToBuy);
// 4
const price = calculatePrice(productToBuy, productAmount);
const discount = 0.2; // 20%
const discountStartsFrom = 10000;
// 5 и 6
let finalPrice = price;

ifDiscount(price, discountStartsFrom, discount);
