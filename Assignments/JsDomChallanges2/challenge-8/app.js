/**
 * Write your challenge solution here
 */


const cardadd = []
const cartitems = document.querySelector("#cart-items")
function addToCart(item, price){
    cardadd.push({item,price})
    console.log(cardadd[0].item, cardadd[0].price);
    // cartitems.innerHTML = `${cardadd[0].item}  ${cardadd[0].price}`
    
}
