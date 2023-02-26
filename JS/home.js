const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
});

let allProducts = [
    {
        id: 1,
        image: "/img/card1.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 2,
        image: "/img/card2.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 3,
        image: "/img/card3.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 4,
        image: "/img/card4.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 5,
        image: "/img/card5.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 6,
        image: "/img/card6.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 7,
        image: "/img/card7.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 8,
        image: "/img/card8.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 9,
        image: "/img/card9.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 10,
        image: "/img/card10.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 11,
        image: "/img/card11.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
    {
        id: 12,
        image: "/img/card12.png",
        name: "Brand",
        shortDes: "A short line about the cloth...",
        price: 20,
        actualPrice: 40,
    },
];

let productData = document.querySelector(".product-container");

let lsData = JSON.parse(localStorage.getItem("cartProduct")) || [];
let lsBuyData = JSON.parse(localStorage.getItem("orderProduct")) || [];

displaydata(allProducts)
function displaydata(data){
    productData.innerHTML = "";

    data.forEach((element) => {
        let cards = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let actPrice = document.createElement("h4");
        let addToCart = document.createElement("button");
        let buyBtn = document.createElement("button");

        addToCart.addEventListener("click", function(){
            if(checkDuplicate(element)){
                alert("Product Allready in Cart");
            }
            else{
                lsData.push({...element, Quantity: 1});
                localStorage.setItem("cartProduct", JSON.stringify(lsData));
                alert("Product Added to Cart");
            }
        })

        buyBtn.addEventListener("click", function(){
            lsBuyData.push(element);
            localStorage.setItem("orderProduct", JSON.stringify(lsBuyData));
            alert("Your order has been placed. Thank you!")
        })

        image.setAttribute("src", element.image);
        name.textContent = element.name;
        desc.textContent = element.shortDes;
        price.textContent = `Price: $${element.price}`;
        actPrice.textContent = `$${element.actualPrice}`;
        addToCart.textContent = "Add to Cart";
        buyBtn.textContent = "Buy";

        cards.append(image, name, desc, price, actPrice, addToCart, buyBtn);
        productData.append(cards);

    })
}

function checkDuplicate(element){
    for(let i=0; i<lsData.length; i++){
        if(lsData[i].id == element.id){
            return true;
        }
    }
    return false;
}


let advertisement = document.querySelector(".advt");
// let prodImage = [];
// for(let i=0; i<productData.length; i++){
//     prodImage.push(productData[i].image)
// }

let index=0;
advertisement.setAttribute("src", allProducts[index].image);
window.addEventListener("load", function(){
    setInterval(function(){
        index++;
        if(index === allProducts.length){
            index=0;
        }
        advertisement.setAttribute("src", allProducts[index].image);
    }, 2000)
});

