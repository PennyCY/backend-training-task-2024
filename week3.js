const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let memberNum=0
let courses=9;
let price = 0;
let totalPrice = courses*price;

console.log(price);


//購買堂數
if(courses <=10){
    price +=1500
   }else if(courses>10 && courses<=20){
    price+= 1300
   }else{
   price +=1100
   };
console.log(price);


// if(name = " " ||courses<0){
//     console.log(`輸入錯誤`)
// }else{
//     console.log(`新增購買紀錄成功！會員${name}購買${courses}堂課，總金額為${totalPrice}元。`);
// }

// function  addPurchaseRecord(member){
    
//     name=members[memberNum]['name'];
//     courses+=members[memberNum]['courses'];  
//     memberNum +=1 ;
       
// };


