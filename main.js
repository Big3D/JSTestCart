Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let shopcartTotal;
console.log(localStorage.getItem("gTotal"));
console.log(localStorage.getObj("cartList"));
document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");

let shopCartArray;
shopCartArray = localStorage.getObj("cartList");
console.log(shopCartArray);



function ResetCounter(){
localStorage.setItem("gTotal", 0);
document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");
}
function ResetArray(){
    localStorage.setObj("cartList", "")
}

function addToCart(buttonData){
    // console.log(Number(buttonData.value));
    // console.log(buttonData.dataset.page);
    // console.log(buttonData.dataset.vegan);
    let itemCost = buttonData.value;
    let itemLocal = buttonData.dataset.page;
    let itemVegan = buttonData.dataset.vegan;

    let cartArray = [];
    let cartArrayStore = localStorage.getObj("cartList");
    let storeItems = [{'price': itemCost, 'pLocal': itemLocal, 'veganOption': itemVegan}];
    // cartArrayStore.push(storeItems)
    console.log(cartArrayStore);
    // cartArray.push({price: itemCost, pLocal: itemLocal, veganOption: itemVegan});
    cartArray.push(storeItems[0]);
    // let cartParse = JSON.parse(cartArray)

    console.log(cartArray[0]);
    // let showMe = JSON.parse(cartArrayStore);
    // console.log(showMe);
    cartArrayStore =  cartArray.concat(cartArrayStore);
    console.log(cartArrayStore);
    localStorage.setObj("cartList", cartArrayStore);
    console.log(localStorage.getObj("cartList"));

    let cartTotal = Number(document.getElementById("ShopCart").innerText);
    cartTotal = Number(localStorage.getItem("gTotal")) + Number(buttonData.value);
    
    localStorage.setItem("gTotal", cartTotal);
    // localStorage.setItem("cartList", cartArray.push());
    
    document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");

    ShowCart();
}

function ShowCart(){
    let cartArrays = localStorage.getObj("cartList");
    let cartArrayList = cartArrays;
    console.log(cartArrayList);

    let getCart = cartArrayList;
    let text = document.getElementById("shopCartTable");
    var shopRow = "";
    console.log(getCart);

    for(let i = 0; i < getCart.length; i++){
        console.log(getCart[i]);
        shopRow = "<tr>";
        shopRow += "<td>" + getCart[i].price + "</td>";
        shopRow += "<td>" + getCart[i].pLocal + "</td>";
        shopRow += "<td>" + getCart[i].veganOption + "</td></tr>";
    }
    console.log(shopRow);
    
    text.innerHTML += shopRow;
}
