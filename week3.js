const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let purchaseRecords = [];
//console.log(purchaseRecords);

//購買課程者
function addPurchaseRecord(name,courses){
  if(name === undefined || name =="" || courses <=0 || typeof courses !=="number"){
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return;
  }
  console.log(name,courses)
  //購買優惠價格
  if(courses<=10){
    unitPrice=1500;
  }else if(courses<=20){
    unitPrice=1300;
  }else{
    unitPrice=1100
  }
  console.log(unitPrice)
  //計算總價
  const totalPrice= unitPrice*courses;
  console.log(totalPrice);
  //將資料寫到陣列
  purchaseRecords.push({
    name: name,
    courses: courses,
    unitPrice: unitPrice,
    totalPrice: totalPrice
  })
  //印出
  console.log(`購買紀錄成功！會員${name}購買${courses}堂課，總金額為${totalPrice}`)
}

//計算總營業額
function calculateTotalPrice(){
  let totalPrice=0
  purchaseRecords.forEach(function(record){
    totalPrice+=record.totalPrice;
  })
  console.log(`目前總營業額為${totalPrice}元`);
}

//篩選尚未購買者(把已購買者挑掉
function filterNoPurchaseMember(){
  const purchaseMemberNames = [];
  purchaseRecords.forEach(function(record){
    purchaseMemberNames.push(record.name);
  })
  console.log(purchaseMemberNames);
  
  const noPurchaseMembers = members.filter(function(member){
    return purchaseMemberNames.includes(member) === false
  });
 console.log(`未購買課程的會員有:${noPurchaseMembers}`)
}

addPurchaseRecord("Alice",4);
addPurchaseRecord("Bob",12);
addPurchaseRecord("Charlie",25);
addPurchaseRecord("Hannah",50);
addPurchaseRecord("名稱","堂數");
calculateTotalPrice();
filterNoPurchaseMember();