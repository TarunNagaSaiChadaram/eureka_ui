// Get list of customers who placed orders in the last 30 days
// const orders = [
//   { id: 1, customer: "Alice", date: "2025-07-20" },
//   { id: 2, customer: "Bob", date: "2025-08-05" },
//   { id: 3, customer: "Charlie", date: "2025-06-15" }
// ];
// // Assume today = 2025-08-08   // Output: ["Alice", "Bob"]

const orders = [
    { id: 1, customer: "Alice", date: "2025-07-20" },
    { id: 2, customer: "Bob", date: "2025-08-05" },
    { id: 3, customer: "Charlie", date: "2025-06-15" }
  ];

  let today = new Date('2025-08-08')

  let customer_list=orders.filter((ord)=>{
    let ord_date=new Date(ord.date);
    let diff_days=today-ord_date;
    return (diff_days)/(1000 * 60 * 60 * 24)<=30;
  }).map(ord=>ord.customer);

  console.log(customer_list);