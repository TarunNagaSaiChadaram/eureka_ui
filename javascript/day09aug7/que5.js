const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 190, change: -1.2, volume: 1500000 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2700, change: +12.5, volume: 800000 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 700, change: +5.0, volume: 2000000 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 3300, change: -8.3, volume: 600000 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 310, change: +2.0, volume: 1000000 }
  ];


  const gs=stocks.reduce((tot_sto,pres)=>{
    if(pres.change>0){
        tot_sto.gainers.push(pres);
    }
    else{
        tot_sto.loosers.push(pres)
    }
    return tot_sto
  },{gainers:[],loosers:[]})

  console.log(gs);