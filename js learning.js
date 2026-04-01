let myFridge = []
let id = 1

function addToFridge(item) {
    myFridge.push(item);
    console.log("Product " + item.productName + " has been added to the fridge.")
}

function removeFromFridge(productId) {
    const itemToRemove = myFridge.find(item => item.productId === productId);

    myFridge = myFridge.filter(item => item.productId !== productId);

    if (itemToRemove) {
        console.log("Product " + itemToRemove.productName + " was deleted from the fridge");
    } else {
        console.log("Product not found");
    }
}
addToFridge({
    productName : "eggs",
    productPrice : 1.0,
    productQuantity : 12,
    expirationDate : "2026-04-10"
})

addToFridge({
    productName : "cheese",
    productPrice : 10.0,
    productQuantity : 1,
    expirationDate : "2026-05-01"
})
myFridge.forEach(element => {
    element.productId = id++;
});
console.log(myFridge)   
removeFromFridge(1)

console.log(myFridge)  
