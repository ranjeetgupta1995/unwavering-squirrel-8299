const createNav = () => {
    let nav = document.querySelector(".navbar");
    nav.innerHTML = `
    <div class="nav">
            <img src="img/unwavering-squirrel-8299 - logo.png" class="brand-logo" alt=""/>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="./cart.html"><img src="img/cart.png" alt="">Cart</a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="./order.html" class="link">Your Order</a></li>
        </ul>
    `;
}
createNav();