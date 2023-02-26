
let productData = document.querySelector(".product-container");

let lsData = JSON.parse(localStorage.getItem("cartProduct")) || [];
let lsBuyData = JSON.parse(localStorage.getItem("orderProduct")) || [];

displaydata(lsData)
function displaydata(data){
    productData.innerHTML = "";

    data.forEach((element) => {
        let cards = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let actPrice = document.createElement("h4");
        
        let increase = document.createElement("button");
        let decrease = document.createElement("button");
        let remove = document.createElement("button");
        let Quantity = document.createElement("span");
        let buyBtn = document.createElement("button");

        buyBtn.addEventListener("click", function(){
            lsBuyData.push(element);
            localStorage.setItem("orderProduct", JSON.stringify(lsBuyData));
            alert("Your order has been placed. Thank you!")
        });

        increase.addEventListener("click", () => {
            element=element.Quantity++;
            localStorage.setItem("cartProduct", JSON.stringify(lsData));
            displaydata(lsData)
        });

        decrease.addEventListener("click", () => {
            if(element.Quantity>1){
            element=element.Quantity--;
            localStorage.setItem("cartProduct", JSON.stringify(lsData));
            displaydata(lsData)
            }
        });

        remove.addEventListener("click", () => {
            lsData=lsData.filter((product) => {
                return product.id != element.id;
            })
            localStorage.setItem("cartProduct", JSON.stringify(lsData));
            displaydata(lsData)
        });

        image.setAttribute("src", element.image);
        name.textContent = element.name;
        desc.textContent = element.shortDes;
        price.textContent = `Price: $${element.price}`;
        actPrice.textContent = `$${element.actualPrice}`;
        buyBtn.textContent = "Buy";
        increase.textContent = "+";
        decrease.textContent = "-";
        Quantity.textContent = element.Quantity;
        remove.textContent = "Remove";


        totalCart = document.querySelector("#cart-total");
        let sum=0;
        for(let i=0; i<lsData.length; i++){
            sum+=lsData[i].price*lsData[i].Quantity;
        }
        totalCart.textContent = sum;

        cards.append(image, name, desc, price, actPrice, increase, Quantity, decrease, remove, buyBtn);
        productData.append(cards);
    })
}