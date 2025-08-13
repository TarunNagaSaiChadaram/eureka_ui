// Create leaderboard from game scores (highest score wins)
// const games = [
//   { player: "Alice", score: 40 },
//   { player: "Bob", score: 60 },
//   { player: "Alice", score: 70 },
//   { player: "Bob", score: 55 }
// ];
// // Output: [{player:"Alice",score:70},{player:"Bob",score:60}]
const games = [
    { player: "Alice", score: 40 },
    { player: "Bob", score: 60 },
    { player: "Alice", score: 70 },
    { player: "Bob", score: 55 }
  ];

let leaderboard=games.sort((a,b)=>b.score-a.score).slice(0,2);
console.log(leaderboard);