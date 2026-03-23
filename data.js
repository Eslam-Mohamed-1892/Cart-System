// let orignalProducts = [
//     { name: "inpone X", price: 550, brand: "Apple", img: "https://image-cdn.ubuy.com/apple-iphone-x-256gb-space-gray/400_400_100/634e40218433e81d083d1061.jpg" },
//     { name: "inpone 12", price: 650, brand: "Apple", img: "https://i.ebayimg.com/images/g/yAMAAOSwscxmqqkL/s-l1600.webp" },
//     { name: "inpone 13", price: 700, brand: "Apple", img: "https://m.media-amazon.com/images/I/41Oa0n1UdFL._AC_SY300_SX300_QL70_ML2_.jpg" },
//     { name: "inpone 14", price: 750, brand: "Apple", img: "https://m.media-amazon.com/images/I/71oWrfCTiqL._AC_SX342_SY445_QL70_ML2_.jpg" },
//     { name: "samsung s 26 ultra", price: 1100, brand: "Samsung", img: "https://i.ebayimg.com/images/g/9VgAAeSw~1RpnWo~/s-l960.webp" },
//     { name: "samsung s 25 ultra", price: 1000, brand: "Samsung", img: "https://i.ebayimg.com/images/g/HOkAAeSw1L1pecCd/s-l960.webp" },
//     { name: "samsung s 23 ultra", price: 800, brand: "Samsung", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60uI54GPHhFGPaZRBOrE-_tUSl9h0T5NuTA&s" },
//     { name: "oppo reno 15", price: 450, brand: "Oppo", img: "https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2026/01/Pre-Order-Oppo-Reno-15-Dual-Sim-256GB-12GB-Ram5G-_6988_1.webp" },
//     { name: "oppo reno 14", price: 400, brand: "Oppo", img: "https://i.ebayimg.com/images/g/1hUAAeSwzoJo8MPh/s-l1600.webp" },
//     { name: "oppo reno 13", price: 350, brand: "Oppo", img: "https://m.media-amazon.com/images/I/615ExCV5w+L._AC_SY300_SX300_QL70_ML2_.jpg" }
// ]


let orignalProductsJSON = localStorage.getItem("Products")
let orignalProducts = JSON.parse(orignalProductsJSON)

let products = orignalProducts;

let cart = []

