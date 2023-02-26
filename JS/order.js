
let productData = document.querySelector(".product-container");

let lsBuyData = JSON.parse(localStorage.getItem("orderProduct")) || [];

displaydata(lsBuyData)
function displaydata(data){
    productData.innerHTML = "";

    data.forEach((element) => {
        let cards = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let actPrice = document.createElement("h4");
        let cancelBtn = document.createElement("button");

        cancelBtn.addEventListener("click", () => {
            lsBuyData=lsBuyData.filter((product) => {
                return product.id != element.id;
            })
            localStorage.setItem("orderProduct", JSON.stringify(lsBuyData));
            displaydata(lsBuyData)
            alert("Your order has been cancled!")
        });

        image.setAttribute("src", element.image);
        name.textContent = element.name;
        desc.textContent = element.shortDes;
        price.textContent = `Price: $${element.price}`;
        actPrice.textContent = `$${element.actualPrice}`;
        cancelBtn.textContent = "Order Cancel";

        cards.append(image, name, desc, price, actPrice, cancelBtn);
        productData.append(cards);
    })
}