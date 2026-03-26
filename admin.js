let table = document.querySelector("table tbody")
let nameInput = document.querySelector(".nameInput")
let priceInput = document.querySelector(".priceInput")
let brandInput = document.querySelector(".brandInput")
let imgUrlInput = document.querySelector(".imgUrlInput")
let editNameInput = document.querySelector(".editNameInput")
let editPriceInput = document.querySelector(".editPriceInput")
let editBrandInput = document.querySelector(".editBrandInput")
let editImgUrlInput = document.querySelector(".editImgUrlInput")
let idexOfEdit = false



let showProducts = () => {
    table.innerHTML = ""
    orignalProducts.forEach((el, index) => {
        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>
            <img height="50" width="50" class="rounded-circle object-fit-cover" src="${el.img}"/>
            </td>
            <td>
              <div class="d-flex flex-column flex-md-row gap-2 justify-content-center">
              <button onclick="editItem(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" >Edit</button>
              <button onclick="removeItem(${index})" class="btn btn-danger" >Remove</button>
              
              </div>
            </td>
        </tr>
        `
    })
}
showProducts()

let removeItem = (index) => {
    orignalProducts.splice(index, 1)
    showProducts()
    let removeProductJSON = JSON.stringify(orignalProducts)
    localStorage.setItem("Products", removeProductJSON)
}


let addNewProduct = () => {
    let newProduct =
    {
        name: nameInput.value
        , price: +priceInput.value
        , brand: brandInput.value
        , img: imgUrlInput.value
    }
    orignalProducts.push(newProduct)
    let newProductJSON = JSON.stringify(orignalProducts)
    localStorage.setItem('Products', newProductJSON)


    nameInput.value = ""
    priceInput.value = ""
    brandInput.value = ""
    imgUrlInput.value = ""

    showProducts()
}

let editItem = (index) => {
    let product = orignalProducts[index]
    editNameInput.value = product.name
    editPriceInput.value = product.price
    editBrandInput.value = product.brand
    editImgUrlInput.value = product.img
    idexOfEdit = index
    let editItemJSON = JSON.stringify(orignalProducts)
    localStorage.setItem("Products" , editItemJSON)
}

let saveChanges = () => {
    orignalProducts[idexOfEdit].name = editNameInput.value
    orignalProducts[idexOfEdit].price = editPriceInput.value
    orignalProducts[idexOfEdit].brand = editBrandInput.value
    orignalProducts[idexOfEdit].img = editImgUrlInput.value
    alert("Saved successfully ✅");
    showProducts()
    let saveChangesJSON = JSON.stringify(orignalProducts)
    localStorage.setItem("Products" , saveChangesJSON)
}