const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      price: 20,
      stock: 50,
      expiryDate: "2026-12-31"
    },
    {
      id: 2,
      name: "Cough Syrup",
      type: "Syrup",
      price: 60,
      stock: 0,
      expiryDate: "2025-06-30"
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      price: 25,
      stock: 100,
      expiryDate: "2024-11-15"
    },
    {
      id: 4,
      name: "Antacid",
      type: "Tablet",
      price: 10,
      stock: 200,
      expiryDate: "2027-01-01"
    }
  ];
  //Find medicines that are expiring before a 
  //specific date (e.g., 2025-12-31)
  let sd='2025-12-31'
  let reqmed=medicines.filter((med) => med.expiryDate < sd)
  console.log(reqmed);