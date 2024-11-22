const inputArea = document.querySelector("#inputArea");
const tipResultPct = document.querySelector("#tipResultPct");
const tipDecreaseBtn = document.querySelector("#tipDecreaseBtn");
const tipIncreaseBtn = document.querySelector("#tipIncreaseBtn");
const tipResultPpl = document.querySelector("#tipResultPpl");
const pplIncreaseBtn = document.querySelector("#pplIncreaseBtn");
const pplDecreaseBtn = document.querySelector("#pplDecreaseBtn");
const calculate = document.querySelector("#calculate");
const clearAll = document.querySelector("#clearAll");

let totalBill;
let percentCounter = 10;
let peopleCounter = 2;
let totalTip;

inputArea.value = 0;
inputArea.style.textAlign = "right";

tipDecreaseBtn.addEventListener("click", decreasePercent);
tipIncreaseBtn.addEventListener("click", increasePercent);
pplIncreaseBtn.addEventListener("click", pplIncreaseNumber);
pplDecreaseBtn.addEventListener("click", pplDecreaseNumber);

function decreasePercent() {
  if (percentCounter <= 0) {
    window.alert(`Tip must not be less than ${percentCounter}`);
    return;
  }
  percentCounter--;
  tipResultPct.innerHTML = `${percentCounter}%`;
  console.log(`${percentCounter} %`);
};

function increasePercent() {
  if (percentCounter >= 100) {
    window.alert(`Tip can not exceed ${percentCounter}`);
    return;
  }
  percentCounter++;
  tipResultPct.innerHTML = `${percentCounter}%`;
  console.log(`${percentCounter} %`);
};

function pplIncreaseNumber() {
  peopleCounter++;
  console.log(peopleCounter);
  tipResultPpl.innerHTML = peopleCounter;
};

function pplDecreaseNumber() {
  if (peopleCounter <= 0) {
    window.alert(`Number of people can't be less than ${peopleCounter}`);
    return;
  }
  peopleCounter--;
  tipResultPpl.innerHTML = peopleCounter;
  console.log(peopleCounter);
};
 
 calculate.addEventListener("click", () => {
   totalBill = Number(inputArea.value);
 
   if (isNaN(totalBill) || totalBill <= 0) {
     window.alert("Please enter a valid and positive bill amount.");
     return;
   }
 
   totalTip = (totalBill * percentCounter) / 100;
   const totalAmount = totalBill + totalTip;
   const perPersonAmount = totalAmount / peopleCounter;
 
   const resultArea = document.createElement("div");
   resultArea.className = "results";
   resultArea.innerHTML = `
     <p>Total Tip: $${totalTip.toFixed(2)}</p>
     <p>Total Amount: $${totalAmount.toFixed(2)}</p>
     <p>Per Person: $${perPersonAmount.toFixed(2)}</p>
   `;
 
   const existingResult = document.querySelector(".results");
   if (existingResult) existingResult.remove();
 
   document.body.appendChild(resultArea);
 });
 
 /*
calculate.addEventListener("click", () => {
  console.log("Hello World!");
  totalBill = Number(inputArea.value);
  if (isNaN(totalBill)) {
    window.alert("Invalid Bill Amount")
  } 
  if (totalBill < 0) {
    window.alert("Bill amount must be Positive!")
  } return;
  
  if (totalBill < 0) {
    window.alert("Bill amount must be positive!")
  };
  
      totalBill = Number(inputArea.value);
    
      if (isNaN(totalBill) || totalBill <= 0) {
        window.alert("Please enter a valid and positive bill amount.");
        return;
      }
    
      totalTip = (totalBill * percentCounter) / 100;
      const totalAmount = totalBill + totalTip;
      const perPersonAmount = totalAmount / peopleCounter;
    
      const resultArea = document.createElement("div");
      resultArea.className = "results";
      resultArea.innerHTML = `
        <p>Total Tip: $${totalTip.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
        <p>Per Person: $${perPersonAmount.toFixed(2)}</p>
      `;
    
      const existingResult = document.querySelector(".results");
      if (existingResult) existingResult.remove();
    
      document.body.appendChild(resultArea);
});*/
/*
clearAll.addEventListener("click", () => {
  totalBill = Number(inputArea.value);
  inputArea.value = 0;
  peopleCounter = 2;
  percentCounter = 10;
  tipResultPpl.innerHTML = peopleCounter;
  tipResultPct.innerHTML = `${percentCounter}%`;
  
   inputArea.value = 0;
    peopleCounter = 2;
    percentCounter = 10;
    tipResultPpl.innerHTML = peopleCounter;
    tipResultPct.innerHTML = `${percentCounter}%`;
  
    // Clear results display
    const existingResult = document.querySelector(".results");
    if (existingResult) existingResult.remove();
});*/

clearAll.addEventListener("click", () => {
  totalBill = 0;
  inputArea.value = "";
  peopleCounter = 2;
  percentCounter = 10;
  tipResultPpl.innerHTML = peopleCounter;
  tipResultPct.innerHTML = `${percentCounter}%`;

  const existingResult = document.querySelector(".results");
  if (existingResult) existingResult.remove();
});
