
// SUPPLEMENTS GARAGE UG - PRODUCT CATALOGUE

const products = [
    {
        name: "Zinc Picolinate",
        brand: "NOW Foods",
        category: "Vitamins & Minerals",
        image: "images/zinc-picolinate-hand.jpeg"
    },
    {
        name: "NAC",
        brand: "NOW Foods",
        category: "General Wellness",
        image: "images/nac-products.jpeg"
    },
    {
        name: "Vital Proteins Collagen Peptides",
        brand: "Vital Proteins",
        category: "Skincare & Skin Health",
        image: "images/collagen-peptides.jpeg"
    },
    {
        name: "Ultra Omega 3-D",
        brand: "NOW Foods",
        category: "General Wellness",
        image: "images/omega-3d-fish-oil.jpeg"
    },
    {
        name: "California Gold Nutrition LactoBif 5 Probiotics",
        brand: "California Gold Nutrition",
        category: "Digestive Health",
        image: "images/lactobif-probiotics.jpeg"
    },
    {
        name: "NOW Magnesium Malate 1000 mg",
        brand: "NOW Foods",
        category: "Vitamins & Minerals",
        image: "images/magnesium-malate.jpeg"
    },
    {
        name: "Magnesium Supplement",
        brand: "Brand to confirm",
        category: "Vitamins & Minerals",
        image: "images/magnesium-products.jpeg"
    },
    {
        name: "NOW Omega-3 Mini Gels Fish Oil",
        brand: "NOW Foods",
        category: "General Wellness",
        image: "images/omega-3-mini-gels.jpeg"
    },
    {
        name: "NOW Taurine 500 mg",
        brand: "NOW Foods",
        category: "Gym & Fitness",
        image: "images/taurine.jpeg"
    },
    {
        name: "Force Factor Women's Fat Burner",
        brand: "Force Factor",
        category: "Weight Management",
        image: "images/womens-fat-burner.jpeg"
    },
    {
        name: "One Daily Women's",
        brand: "21st Century",
        category: "Women's Health & Wellness",
        image: "images/21st-century-one-daily-womens.jpeg"
    },
    {
        name: "Multi For Her",
        brand: "Nature Made",
        category: "Women's Health & Wellness",
        image: "images/nature-made-multi-for-her.jpeg"
    },
    {
        name: "Triple Omega Complex 3-6-9",
        brand: "21st Century",
        category: "General Wellness",
        image: "images/21st-century-triple-omega-3-6-9.jpeg"
    },
    {
        name: "Vitamin B-12 1000 mcg",
        brand: "21st Century",
        category: "Vitamins & Minerals",
        image: "images/21st-century-vitamin-b12-1000mcg.jpeg"
    },
    {
        name: "Vitamin D3 + K2",
        brand: "21st Century",
        category: "Vitamins & Minerals",
        image: "images/21st-century-vitamin-d3-k2.jpeg"
    },
    {
        name: "Nature Made Magnesium 250 mg",
        brand: "Nature Made",
        category: "Vitamins & Minerals",
        image: "images/nature-made-magnesium-250mg.jpeg"
    },
    {
        name: "Nature Made Iron 65 mg",
        brand: "Nature Made",
        category: "Vitamins & Minerals",
        image: "images/nature-made-iron.jpeg"
    },
    {
        name: "Nature Made Super B-Complex with C",
        brand: "Nature Made",
        category: "Vitamins & Minerals",
        image: "images/nature-made-b-complex.jpeg"
    },
    {
        name: "Nature Made Fish Oil 1000 mg",
        brand: "Nature Made",
        category: "General Wellness",
        image: "images/nature-made-fish-oil.jpeg"
    },
    {
        name: "Nature Made Zinc 30 mg",
        brand: "Nature Made",
        category: "Vitamins & Minerals",
        image: "images/nature-made-zinc-30mg.jpeg"
    },
    {
    name: "One Daily Men's Health",
    brand: "21st Century",
    category: "Men's Health",
    image: "images/21st-century-one-daily-mens-health.jpeg"
    },
    {
    name: "Multi For Him",
    brand: "Nature Made",
    category: "Men's Health",
    image: "images/nature-made-multi-for-him.jpeg"
},
{
    name: "L-Arginine 1000mg",
    brand: "21st Century",
    category: "General Wellness",
    image: "images/21st-century-l-arginine-1000mg.jpeg"
},
{
    name: "Biotin 10000mcg",
    brand: "21st Century",
    category: "Hair & Skin Health",
    image: "images/21st-century-biotin-10000mcg.jpeg"
},
{
    name: "Calcium Magnesium Zinc + D3",
    brand: "21st Century",
    category: "Vitamins & Minerals",
    image: "images/21st-century-calcium-magnesium-zinc-d3.jpeg"
},
{
    name: "Vitamin C 500mg",
    brand: "21st Century",
    category: "Vitamins & Minerals",
    image: "images/21st-century-vitamin-c-500mg.jpeg"
},
{
    name: "Vitamin E 180mg",
    brand: "21st Century",
    category: "Vitamins & Minerals",
    image: "images/21st-century-vitamin-e-180mg.jpeg"
},
{
    name: "Potassium Gluconate 595mg",
    brand: "21st Century",
    category: "Vitamins & Minerals",
    image: "images/21st-century-potassium-gluconate-595mg.jpeg"
},
    
];


// PRODUCT SEARCH FUNCTION

function searchProducts() {
    const searchInput = document.getElementById("productSearch");

    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {
        const productDetails = card.textContent.toLowerCase();

        card.style.display = productDetails.includes(searchTerm)
            ? ""
            : "none";
    });
}


// DISPLAY PRODUCTS ON WEBSITE

function displayProducts() {
    const productContainer = document.querySelector(".product-container");

    if (!productContainer) return;

    productContainer.innerHTML = products.map(product => {

        const imageHTML = product.image
            ? `<img src="${product.image}" alt="${product.name}">`
            : `<div class="product-image-placeholder">Image coming soon</div>`;

        return `
            <div class="product-card">
                ${imageHTML}
                <h3>${product.name}</h3>
                <p>${product.brand}</p>
                <p>${product.category}</p>

                <a href="product.html?name=${encodeURIComponent(product.name)}">
                    <button type="button">View Product</button>
                </a>
            </div>
        `;
    }).join("");
}


// LOAD PRODUCTS ONLY ON THE SHOP PAGE

if (document.querySelector(".product-container")) {
    displayProducts();
}


// PRODUCT CATEGORY FILTER FUNCTION

function filterProducts(category) {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {
        const categoryElement = card.querySelector("p:nth-of-type(2)");

        if (!categoryElement) return;

        const productCategory = categoryElement.textContent;

        card.style.display =
            category === "All" || productCategory === category
                ? ""
                : "none";
    });
}


// VIEW PRODUCT DETAILS

function viewProduct(productName) {
    window.location.href =
        "product.html?name=" + encodeURIComponent(productName);
}


// ORDER VIA WHATSAPP

function orderViaWhatsApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");

    const phoneNumber = "256702765163";

    const message = "Hello Supplements Garage UG! I would like to order " +
        productName + ". Please provide me with more information.";

    const whatsappURL = "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// DISPLAY SHOPPING CART
// Cart troubleshooting and pricing will be handled later.

function displayCart() {

    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer) return;

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                Your shopping cart is currently empty.
            </p>
        `;

        document.getElementById("cart-count").textContent = 0;
        document.getElementById("cart-total").textContent = "UGX 0";

        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>${item.brand}</p>

                <div class="quantity-controls">
    <button onclick="changeQuantity('${item.name}', -1)">−</button>
    <span>${item.quantity}</span>
    <button onclick="changeQuantity('${item.name}', 1)">+</button>
</div>

            </div>

            <button onclick="removeFromCart('${item.name}')">
                Remove
            </button>

        </div>
    `).join("");

    const totalItems = cart.reduce((total, item) =>
        total + item.quantity, 0
    );

    document.getElementById("cart-count").textContent = totalItems;

    document.getElementById("cart-total").textContent =
        "Prices to be confirmed";
}
// CHANGE PRODUCT QUANTITY

function changeQuantity(productName, change) {

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    const item = cart.find(item => item.name === productName);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.name !== productName);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    displayCart();
}


// REMOVE PRODUCT FROM CART

function removeFromCart(productName) {

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    cart = cart.filter(item => item.name !== productName);

    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    displayCart();
}

// CHECKOUT VIA WHATSAPP

function checkoutViaWhatsApp() {

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customerName = document.getElementById("customer-name").value.trim();
    const customerPhone = document.getElementById("customer-phone").value.trim();
    const deliveryLocation = document.getElementById("delivery-location").value.trim();

    if (!customerName || !customerPhone || !deliveryLocation) {
        alert("Please fill in all your delivery details.");
        return;
    }

    let message = "Hello Supplements Garage UG! I would like to place an order.\n\n";

    message += "CUSTOMER DETAILS\n";
    message += "Name: " + customerName + "\n";
    message += "Phone: " + customerPhone + "\n";
    message += "Delivery Location: " + deliveryLocation + "\n\n";

    message += "ORDER DETAILS\n";

    cart.forEach(item => {
        message += item.name + "\n";
        message += "Quantity: " + item.quantity + "\n\n";
    });

    message += "Please confirm the prices and delivery details.";

    let phoneNumber = "256702765163";

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
    alert("Your order has been prepared! Please send the message on WhatsApp to complete your order.");
}

