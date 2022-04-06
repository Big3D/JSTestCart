let shopcartTotal;
console.log(localStorage.getItem("gTotal"));
document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");

function ResetCounter(){
localStorage.setItem("gTotal", 0);
document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");
}

function addToCart(value, page, vegan){
    console.log(value);
    console.log(page);
    console.log(vegan);

    let cartArray = [];
    cartArray.push( {price: value, pLocal: page, veganOption: vegan} )
    

    console.log(cartArray[0]);
    let cartTotal = Number(document.getElementById("ShopCart").innerText);
    cartTotal = Number(localStorage.getItem("gTotal")) + Number(value);
    
    localStorage.setItem("gTotal", cartTotal);
    localStorage.setItem("cartList", cartArray.push());
    
    document.getElementById("ShopCart").innerText = localStorage.getItem("gTotal");
}

function checkContents(){
    let cartItems = localStorage.getItem("cartList");

    let list = "<tr><th>Name</th><th>Value</th><th>Item</th></tr>\n";

    if( cartItems.length == 0){
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td></tr>\n";
    }
    else{
        for (i=0; i < cartItems.length; i++){
            key = cartItems.key(i);
            let data = JSON.parse(cartItems.getItem(key));
            list += "<tr><td>" + key + "</td>\n<td>" + data[0] + 
            "</td>" + data[1] + "</tr>\n";
        }
    }
    console.log(list);
}