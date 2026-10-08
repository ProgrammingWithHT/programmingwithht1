const items = [
    {name: "Bike", price: 100},
    {name: "Car", price: 70},
    {name: "TV", price: 50},
    {name: "CD", price: 1000},
    {name: "Laptop", price: 200},
    {name: "Mobile", price: 5},
    {name: "Fan", price: 10},
]



// /   *Filter Method*   ///
/*
const filteritems = items.filter((item)=> {
    return item.price <=100;
    // return item.price ==100; Give those array who value = to 100
});
console.log(filteritems)
*/



///    *Find Method*   ///
/*
const Finditems = items.find((item)=> {
    // return item.price == 100;   //give first matching array =to 100
    return item.name === 'TV';    //you can also use
});
console.log(Finditems)
*/



///   *Map Method*   ///
/*
const Mapitems = items.map((item)=> {
    return item.price;        
    // return item.name;
});
console.log(Mapitems)
*/



///   *ForEach Method*   ///
/*
items.forEach((item)=> {
    console.log(item.price);        
    console.log(item.name);
});
*/



///   *Some Method*   ///
/*
const hasInexpensiveItems = items.some((item)=> {
    return item.price < 100;     //OutPut : true //checked item is less than 100 is present in side the array
});
console.log(hasInexpensiveItems)
*/



///   *Every Method*   ///
/*
const hasInexpensiveItems = items.every((item)=> {
    // return item.price < 100;   //not we checked from total value so its give false value
    return item.price <= 1000;    //every method checked from total value and give true value but some method not checked from total value
});
console.log(hasInexpensiveItems)
*/



///   *Reduce Method*   ///
/*
const total = items.reduce((currentTotal, item)=> {
    // console.log(item.price);
    // console.log(currentTotal);   //starting value is set to zero
    return item.price + currentTotal  //output: Give total Sum OF item.price
}, 0);
console.log(total)
*/



///   *Includes Method*   ///
/*
const arrayIncludes = [1,2,56,2,1,4,7]
const include = arrayIncludes.includes(23);
console.log(include);
*/






// for (let i = 0; i < items.length; i++) {
    
//     if (items[i].price<=100) {
//         console.log(items[i].price)
//     }
// }

// console.log(items[0].price);
// console.log(items[5].price);
