let myFridge = []
let id = 1

function addToFridge(item) {
    myFridge.push(item);
    console.log("Product " + item.productName + " has been added to the fridge.")
}

function removeFromFridge(productId) {
    const item = myFridge.find(item => item.productId === productId);
    if (item) {
        myFridge.pop(item);
        console.log("Product with name " + item.productName + " has been removed from the fridge.");
    } else {
        console.log("Product with ID " + productId + " not found in the fridge.");
    }
}

addToFridge({
    productName : "milk",
    productPrice : 2.5,
    productQuantity : 1,
    expirationDate : "2026-04-07"
})

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

    
removeFromFridge(5)



console.log(myFridge)