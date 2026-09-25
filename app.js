

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


// const products =[
//     {name:"bun",inStock:true},
//     {name:"car",inStock:false},
//     {name:"bat",inStock:true},
//     {name:"van",inStock:false},
// ];



//filter the instock items-----------------------------------------------

// let inStockItems =products.filter(products =>products.inStock == false);

// let inStockItems = products.filter(
//     function (product){
//         return productFilter(product)
//     }
// )

// function productFilter(product){
//     return product.inStock == true ;
// }

// console.log(inStockItems);

// function getSum(num1,num2){
//     return num1+num2;
// }

// let getSum=(num1,num2) =>{
//     return num1+num2;
// }

// console.log(getSum(10,20));



// let sample = textValue =>{
//     return textValue;
// }

// console.log(sample("hii thilini"));


// let sample =textValue => textValue;
// console.log(sample("hiii"));







// const productsList =[
//     {name:"bun",inStock:true},
//     {name:"car",inStock:false},
//     {name:"bat",inStock:true},
//     {name:"van",inStock:false},
// ];

// // for (product of productsList){
// //     console.log(product);
// // }


// productsList.forEach(product =>console.log(product));



// const letterList =["B","A","D","C"];

// let sortArray = letterList.toSorted();

// console.log(sortArray);





// const employeeSalary = [76000,68000,43000,90000];
// let newSalary = employeeSalary.map(salary => salary *2);

// console.log(newSalary);



// find -----------------------------------------

// const studentList =[
//     {id:"001",name:"kamal"},
//     {id:"002",name:"sunil"},
//     {id:"003",name:"nimal"},
//     {id:"004",name:"Amal"}
// ];

// let student =studentList.find(student=>student.id==="003");

// console.log(student);


//json-java script object notation----------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>
//     {console.log(data);

//       let tblToDoList =   document.getElementById("tblToDoList");

//       let body="";

//       data.forEach(element => {
//         body+=`

//         <tr>
//             <td>${element.id}</td>
//             <td>${element.title}</td>
//             <td>${element.userId}</td>
//             <td>${element.completed}</td>
//         </tr>

//         `
        
//       });

//       tblToDoList.innerHTML=body;
//     }
// )

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let productContainer = document.getElementById("productContainer");
        let body = "";

        data.forEach(element => {
            body += `
                <div class="col">
                    <div class="card shadow-sm h-100">
                        <img src="${element.image}" class="card-img-top" alt="${element.title}" height="225" style="object-fit: contain; padding: 10px;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fs-6">${element.title}</h5>
                            <p class="card-text text-truncate">${element.description}</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-body-secondary">$${element.price}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        productContainer.innerHTML = body;
    })
    .catch(error => console.error("Error fetching data:", error));