let table = document.querySelector("table tbody")

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
                <button onclick="editItem(${index})" class="btn btn-warning" >Edit</button>
                <button onclick="removeItem(${index})" class="btn btn-danger" >Remove</button>
            </td>
        </tr>
        `
    })
}
showProducts()

let removeItem = (index) =>{
    orignalProducts.splice(index , 1)
    showProducts()
}

