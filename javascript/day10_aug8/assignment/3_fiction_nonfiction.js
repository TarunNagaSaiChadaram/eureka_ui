// 3. Group books by genre , output = {fiction:[] , non-fiction:[]}
// const books = [
//   { title: "Book A", genre: "Fiction", year: 2015 },
//   { title: "Book B", genre: "Non-Fiction", year: 2020 },
//   { title: "Book C", genre: "Fiction", year: 2018 },
//   { title: "Book D", genre: "Non-Fiction", year: 2010 }
// ];
const books = [
    { title: "Book A", genre: "Fiction", year: 2015 },
    { title: "Book B", genre: "Non-Fiction", year: 2020 },
    { title: "Book C", genre: "Fiction", year: 2018 },
    { title: "Book D", genre: "Non-Fiction", year: 2010 }
  ];

  let books_genre=Object.groupBy(books,(book)=>(book.genre));
  console.log(books_genre);