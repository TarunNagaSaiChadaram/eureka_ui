// 6. Merge orders with customer details (join by id)
// const customers = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];
// const ordersList = [
//   { orderId: 101, customerId: 1 },
//   { orderId: 102, customerId: 2 }
// ];
// // Output: [
// //   { orderId: 101, customerId: 1, name: "Alice" },
// //   { orderId: 102, customerId: 2, name: "Bob" }
// // ]

const customers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  const ordersList = [
    { orderId: 101, customerId: 1 },
    { orderId: 102, customerId: 2 }
  ];
let mergeord=[]
  for(i in customers){
    if(customers[i]['id']==ordersList[i]['customerId']){
        mergeord.push({order_Id:ordersList[i]['orderId'],customer_id:customers[i]['id'],Name:customers[i]['name']});
    }
  }
console.log(mergeord);