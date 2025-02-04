const members = [
    memberStatus=
        {name:"Alice",
         courses:6},
        {name: "Bob",
         courses:11},
        {name:"Charlie",
          courses:3},
        {name:"Diana",
         courses:20},
        {name:"Evan",
         courses:17},
        {name:"Fiona",
         courses:25},
        {name:"George",
         courses:12},
        {name:"Hannah",
         courses:8}
    ];

let memberNum=0

function  addPurchaseRecord(member){
    let courses=0;
    name=members[memberNum]['name'];
    courses+=members[memberNum]['courses'];
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
    memberNum +=1 ;
    
    if(name = " " ||courses<0){
        console.log(`輸入錯誤`)
    }else{
        return console.log(`新增購買紀錄成功！會員${name}購買${courses}堂課，總金額為${totalPrice}元。`);
    }
    
};

addPurchaseRecord(0);
addPurchaseRecord(1);
addPurchaseRecord(2);
