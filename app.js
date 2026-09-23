

// const customerList = [];
// customerList.push();

// customerList = "saman";

// console.log(typeof customerList);

//arraaay methods-------------------------------------------------------------------------
// const customerList = [];

// customerList.push("1");
// customerList.push("3");
// customerList.push("5");

// to reverse the list -------------------------------------------

// let revAr = customerList.reverse();

// console.log(customerList);


const products =[
    {name:"bun",inStock:true},
    {name:"car",inStock:false},
    {name:"bat",inStock:true},
    {name:"van",inStock:false},
];



//filter the instock items-----------------------------------------------

// let inStockItems =products.filter(products =>products.inStock == false);

let inStockItems = products.filter(
    function (product){
        return productFilter(product)
    }
)

function productFilter(product){
    return product.inStock == true ;
}

console.log(inStockItems);