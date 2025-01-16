// ### 題目一：比較運算子
// 請依序告知以下 console.Log 會顯示什麼值，
// 若不確定答案，可將 code 貼在 chrome console 顯示後，再回頭補知識點。
let a = 9;//宣告變數為a,並賦值number型別為9
let b = 13;//宣告變數為b,並賦值number型別為13
console.log(a > 0);//取出變數a的值為9,9>0,故印出結果為true
console.log(b > a);//取出變數a的值9和變數b的值13,13>9,故印出結果為true
console.log(a + b > 1);//取出變數a的值9和變數b的值13,13+9=22>1,故印出結果為true
let c = 51;//宣告變數為c,並賦值number型別為51
let d = 163;//宣告變數為d,並賦值number型別為163
console.log(c == d);//取出變數c的值51和變數d的值163,51不等於d,故印出結果為false
console.log(c !== d);//取出變數c的值51和變數d的值163,51不等於d,故印出結果為true
let e = 28;//宣告變數為e,並賦值number型別為28
let f = 45;//宣告變數為f,並賦值number型別為45
console.log(f >= e);//取出變數e的值28和變數f的值45,45>=28,故印出結果為true
console.log(f != e);//取出變數e的值28和變數f的值45,45不等於28,故印出結果為true
console.log(f == e);//取出變數e的值28和變數f的值45,45不等於28,故印出結果為false

// ### 題目二：比較運算子 + 強制轉型
// 請回答每個 console.log 的值為？
let g = 8;//宣告變數為g,並賦值number型別為8
let h = '8';//宣告變數為h,並賦值string型別為「8」
console.log(g * h == 88);//取出變數g的值8和變數h的值「8」,js的number和string相乘,string會自動轉型為number,故結果為8*8=64,88!=64,故印出結果為false
console.log(g * h == 64);//取出變數g的值8和變數h的值「8」,js的number和string相乘,string會自動轉型為number,故結果為8*8=64,64=64,故印出結果為true
console.log(g * h === 64);//取出變數g的值8和變數h的值「8」,js的number和string相乘,string會自動轉型為number,故結果為8*8=64,64=64,故印出結果為true

let i = '9';//宣告變數為i,並賦值string型別為「9」
let j = '9';//宣告變數為j,並賦值string型別為「9」
console.log(i + j == 99);//取出變數i的值「9」和變數j的值「9」,結果為sting型別「99」,倆個等號較不嚴僅,99='99',故印出結果為true
console.log(i + j === '99');//取出變數i的值「9」和變數j的值「9」,結果為「99」,三個等號較嚴謹,'99'==='99',故印出結果為true
console.log(i + j === 99);//取出變數i的值「9」和變數j的值「9」,結果為「99」,三個等號較嚴謹,型別不同,99!=='99',故印出結果為false

var k = 3;//宣告變數為k,並賦值number型別為3
var l = '8';//宣告變數為l,並賦值string型別為「8」
// 請文字解釋為什麼
console.log(k * l > 21);
//取出變數k的值3和變數l的值「8」,3*'8'=24,number+string時string會自動轉型為number,24>21,故印出結果為true

// ### 題目三：邏輯運算子 + if, else
// 情境：健身房週年慶，買課程送贈品
// 健身房準備了 280 個贈品，只要有達以下條件之一，就送會員一個贈品
// 1. 消費滿 1599 元
// 2. 是健身房的 VIP 會員
// Bob 今天來消費了 1800 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼

let giftNum = 280; /* 贈品數量 */
let giftPriceRule = 1599; /* 贈品消費門檻 */
let BobPrice = 1800; /* Bob 消費金額 */
let BobIsVip = false; /* Bob 是否為 VIP */

// 練習：（可自行將下方程式碼的註解刪除，完成答題）
if (BobPrice>=giftPriceRule ||BobIsVip==true) {
    console.log("客戶您好，您有符合贈品資格");
    if(BobPrice>= giftPriceRule ||BobIsVip == true){
      giftNum = giftNum - 1;
    }
 } else {
   console.log("客戶您好，您沒有符合贈品資格")
 }

console.log(`贈品還剩下${giftNum}個`);

// ### 題目四：
// 健身房的業績獎金計算
// 會計官想寫一個程式，來計算教練的業績獎金，以下為條件值
// 條件一：不管有無課程，基本獎金先給 6,000元
// 條件二：全年業績在 10 萬以下者，給 10% 獎金
// 條件三：全年業績超過 10 萬 ~ 30 萬以下者，給 15% 獎金
// 條件四：全年業績超過 30 萬者，給 20% 獎金

// 例如小華的全年業績為 8 萬：80,000 * 0.1 + 6,000 總計需要支付 14,000 元獎金。

let coachIncome = 240000; // 小明全年業績
let baseBonus = 6000; // 基本獎金
let coachBonus = baseBonus; // 教練業績獎金帳單，並已加入條件一基本獎金

// 練習：計算教練業績獎金
if(coachIncome<=100000){
  coachBonus += coachIncome*0.1;
}else if(coachIncome>100000 && coachIncome<=300000){
  coachBonus += coachIncome*0.15;
}else if(coachIncome>300000){
  coachBonus += coachIncome*0.2;
}
console.log(`小明總共需支付 $ ${coachBonus} 獎金`);

// ### 題目五：剪刀石頭布
// 請寫程式來判斷剪刀石頭布的輸贏
// 宣告兩個變數，一個是 playerA 另一個是 playerB
// 請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境

let playerA = '剪刀';
let playerB = '剪刀';
if (playerA === '剪刀' && playerB === '剪刀'||playerA === '石頭' && playerB === '石頭'||playerA === '布' && playerB === '布'){
  console.log('平手');
}else if (playerA === '剪刀' && playerB === '石頭'||playerA === '石頭' && playerB === '布'||playerA === '布' && playerB === '剪刀'){
  console.log('playerB贏了');
}else if (playerA === '剪刀' && playerB === '布'||playerA === '石頭' && playerB === '剪刀'||playerA === '布' && playerB === '石頭'){
  console.log('playerA贏了');
}
// 練習：使用 if, else if, else 判斷輸贏

// ### 題目六：陣列、物件變數定義
// 這是一間位於高雄市的健身房，名為「高雄市健身教練聯盟」，專注於提供高品質的健身指導服務。健身房內有多位專業教練，以下是兩位教練的詳細介紹：
/*
王教練：
- 專長：力量訓練、減重課程
- 課程：
  - 個人訓練課程：每次收費 2000 元，課程時長 60 分鐘，目前有空堂。
  - 團體訓練課程：每次收費 1500 元，課程時長 90 分鐘，目前無空堂。
- 背景介紹：王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。
- 是否接收新學員：是

李教練：
- 專長：瑜伽、體態雕塑
- 課程：
  - 個人訓練課程：每次收費 1800 元，課程時長 50 分鐘，目前無空堂。
  - 團體訓練課程：每次收費 1200 元，課程時長 75 分鐘，目前有空堂。
- 背景介紹：李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。
- 是否接收新學員：否
*/

const gymCoach = {
  coachMessage:[
    {
      name:'王教練',
      goodAt:'Strength training and lose weight',
      personalTraining:
        {price:2000,
          time:60,
          haveTime:true
        },
      gruopTraining:
        {price:1500,
          time:90,
          haveTime:false
        },
      background:'王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。',
      admitNewStudent:true
    },{
      name:'李教練',
      goodAt:'Yoga and body sculpture',
      personalTraining:
        {price:1800,
          time:50,
          haveTime:false
        },
      gruopTraining:
        {price:1200,
          time:75,
          haveTime:true
        },
      background:'李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。',
      admitNewStudent:false
    }
  ]
};
 // 練習：使用物件變數定義兩位教練的資訊

console.log(gymCoach);

// ### 題目七：
// 主管要求健身中心的兩位教練業績都需達到 50,000元
// 請透過以下資訊修改，幫助教練業績達標！
let performanceData = {
  company: 'hahaFitness',
  bossName: 'casper',
  coaches: [
    {
      name: 'Alice',
      performance: 42000,
    },
    {
      name: 'Bob',
      performance: 38000,
    },
  ],
};

// 練習：第一位教練（可將下方程式碼註解移除，完成答題）

if ( performanceData['coaches'][0]['name']==='Alice'/* 判斷邏輯，使其為 true */) {
  performanceData['coaches'][0]['performance'] += 8000  // 請填寫第一位教練業績增長程式碼，使用 +=
};

// 練習：第二位教練（可將下方程式碼註解移除，完成答題）

if ( performanceData['coaches'][1]['name'] === 'Bob'/* 判斷邏輯，使其為 true */) {
   performanceData['coaches'][1]['performance'] += 12000// 請填寫第二位教練業績增長程式碼，使用 +=
};

console.log(performanceData);

// ### 題目八
/* 
使用 `物件包含物件` 的格式定義以下內容：
  - 跑步機每分鐘消耗 10 卡
  - 瑜伽每分鐘消耗 5 卡
  - 騎腳踏車每分鐘消耗 8 卡
*/
const activities = {
  running:{
    calorieBurnPerMin:10
  },
  yoga:{
    calorieBurnPerMin:5
  },
  riding:{
    calorieBurnPerMin:8
  }
}; // 練習：使用 `物件包含物件` 的格式定義運動類型與每分鐘消耗卡路里

// ## 題目九
// 情境：算小明今天的卡路里消耗
// 承上題，根據運動類型與每分鐘消耗卡路里的變數設計，計算小明消耗的卡路里。
// 小明今天騎了 10 分鐘的腳踏車去健身房，並先跑了 30 分鐘的跑步機熱身，最後再參加了 40 分鐘的瑜伽團課，最後再騎 10 分鐘腳踏車回家。

let calorieBurn = 0;
calorieBurn += activities['riding']['calorieBurnPerMin']*10;
calorieBurn += activities['running']['calorieBurnPerMin']*30;
calorieBurn += activities['yoga']['calorieBurnPerMin']*40;
calorieBurn += activities['riding']['calorieBurnPerMin']*10;
console.log(calorieBurn);

// 練習：計算小明今日消耗的卡路里

console.log(`小明今日一共消耗約 ${calorieBurn} 卡路里。`);

// ### 10. 運動量是否達標！
// 情境：小明記錄了一週內每一天的運動情況，包含運動時長（分鐘）和平均心率（次數）。
/* 現有的運動標準為「533原則」：
  1. 每週運動至少 5 次
  2. 或每週累計運動時間達 150 分鐘
  3. 每次運動必須達到 **30 分鐘** 且平均心率達 **130 次以上** 才算合格。
  
  請完成程式碼，判斷小明是否符合「533原則」。
*/

// 運動紀錄
let totalDuration = 0; // 累計符合條件的運動時間
let validDays = 0; // 符合條件的運動次數

// 小明的一週運動紀錄
const exerciseRecords = [
  { day: 'Monday', duration: 40, heartRate: 135 },
  { day: 'Tuesday', duration: 20, heartRate: 120 },
  { day: 'Wednesday', duration: 30, heartRate: 140 },
  { day: 'Friday', duration: 50, heartRate: 125 },
  { day: 'Saturday', duration: 60, heartRate: 145 },
];

// 範例：週一
if (exerciseRecords[0].duration >= 30 && exerciseRecords[0].heartRate >= 130) {
  totalDuration += exerciseRecords[0]['duration'];
  validDays += 1;
}
// 練習：週二、週三、週四、週五、週六
if (exerciseRecords[1].duration >= 30 && exerciseRecords[1].heartRate >= 130) {
  totalDuration += exerciseRecords[1]['duration'];
  validDays += 1;
}//週二
if (exerciseRecords[2].duration >= 30 && exerciseRecords[2].heartRate >= 130) {
  totalDuration += exerciseRecords[2]['duration'];
  validDays += 1;
}//週三
if (exerciseRecords[3].duration >= 30 && exerciseRecords[3].heartRate >= 130) {
  totalDuration += exerciseRecords[3]['duration'];
  validDays += 1;
}//週五
if (exerciseRecords[4].duration >= 30 && exerciseRecords[4].heartRate >= 130) {
  totalDuration += exerciseRecords[4]['duration'];
  validDays += 1;
}//週六

console.log(validDays);
// 練習：判斷是否符合 533 原則
let isCompliant = 0;
if (totalDuration>=150 && validDays>=5){
  isCompliant = true;
}else{
  isCompliant = false;
}
 // 條件：運動次數至少 5 次 || 運動時間累績達標 >= 150;
console.log(isCompliant);
console.log(`小明的運動量是否達標: ${isCompliant}`);   // 輸出: 小明的運動量是否達標
