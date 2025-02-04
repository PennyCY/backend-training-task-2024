const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let name = 0;
let courses=6;
let price = 0;
let totalPrice = courses*price;

if(courses <=10){
    price +=1500
}else if(courses>10 && courses<=20){
    price+= 1300
}else{
    price +=1100
};

console.log(price);
// function  addPurchaseRecord(){

//     console.log(`新增購買紀錄成功！會員${name}購買${courses}堂課，總金額為${totalPrice}元。`);
// };

