// Get the top 2 products with highest total sales (price × quantity)
// const products = [
//   { name: "Laptop", price: 1000, quantity: 4 },
//   { name: "Phone", price: 500, quantity: 10 },
//   { name: "Tablet", price: 800, quantity: 5 }
// ];
// // Output: ["Phone", "Tablet"]
const products = [
    { name: "Laptop", price: 1000, quantity: 4 },
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Tablet", price: 800, quantity: 5 }
  ];


let top_2_prod=products.map((prod)=>({...prod,sales:prod.price*prod.quantity}));
console.log(top_2_prod.sort((a,b)=>(b.sales-a.sales)).slice(0,2).map(ele=>ele.name));