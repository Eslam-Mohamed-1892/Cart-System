
let tbody = document.querySelector("table tbody")
let productsDiv = document.querySelector("#productsDiv")
let table = document.querySelector("table tbody")
let totalSpan = document.querySelector("#totalSpan")

let showProducts = () => {
    productsDiv.innerHTML = ""
    products.forEach((el, index) => {
        productsDiv.innerHTML += `
                <div class="col-6 col-lg-4 col-md-4 border-0">
                    <div class="card col-12 p-3 fw-semibold">
                        <img src="${el.img}" height="200" class="card-img-top object-fit-contain">
                        <div class="card-body">
                            <h5 class="card-title">${el.name}</h5>
                            <p>${el.price} L.E</p>
                            <button onclick="addToCart(${index})" class="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>

        `
    })
}
showProducts()

let caclTotal = () => {
    let total = 0;
    cart.forEach((el, index) => {
        total = total + (el.qty * el.price)
    })
    totalSpan.textContent = total + " L.E"
}

let showCart = () => {
    tbody.innerHTML = ""
    cart.forEach((el, index) => {
        tbody.innerHTML += `
                    <tr class= "text-center">
                        <td>${index + 1}</td>
                        <td>${el.name}</td>
                        <td>${el.price}</td>
                        <td>
                            <div class="d-flex align-items-center justfy-content-center gap-3">
                                <button onclick="decrement(${index})" class="btn btn-danger">-</button>
                                <p class="mb-0">${el.qty}</p>
                                <button onclick="increment(${index})" class="btn btn-warning">+</button>
                            </div>
                        </td>
                        <td>${el.qty * el.price} L.E</td>
                    </tr>
        `
    })
    caclTotal()
}

let addToCart = (index) => {
    let product = products[index]
    let productInCart = cart.findIndex((el, index) => {
        return el.name == product.name
    })

    if (productInCart == -1) {
        product.qty = 1
        cart.push(product)
    } else {
        cart[productInCart].qty++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart()
}

let increment = (index) => {
    cart[index].qty++;
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart()
}

let decrement = (index) => {
    cart[index].qty--;
    if (cart[index].qty < 1) {
        cart.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart()
}

let filterPorducts = (brand) => {
    if (brand == "All") {
        products = orignalProducts
    }
    else {
        let final = orignalProducts.filter((el) => {
            return el.brand == brand;
        })
        products = final
    }
    showProducts()
}

showCart();