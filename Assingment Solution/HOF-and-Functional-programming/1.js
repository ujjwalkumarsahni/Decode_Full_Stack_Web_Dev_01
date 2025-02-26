const orderList =[
   { name:"Laptop",price: 120000 },
   { name:"Mobile",price: 40000 },
   { name:"Mobile Charger",price: 1000 },
   { name:"Laptop",price: 500 },
]

let sum = 0;
orderList.forEach(data => sum+= data.price)

console.log("The Total Price is Rs. ",sum);
