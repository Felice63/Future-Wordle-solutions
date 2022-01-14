// Today's date
let dateTdy = document.querySelector(".dateTdy");
dateTdy.innerHTML = currentDay;

// Today's day number
let dayNum = document.querySelector(".dayNum");
dayNum.innerHTML = todayNum;

// Today's Wordle Solution
let wrdlTody = document.querySelector(".wrdlTody");
wrdlTody.innerHTML = La[todayNum+195];

// Today's Wordle Solution number
let sltnNumTdy = document.querySelector(".sltnNumTdy");
sltnNumTdy.innerHTML = La.findIndex(word => word == La[todayNum+195])

// Tomorrow's Wordle Solution
let wrdlTomrw = document.querySelector(".wrdlTomrw");
wrdlTomrw.innerHTML = La[todayNum+196];

// Wordle Solution two days from now
let wrdlInTwodys = document.querySelector(".wrdlInTwodys");
wrdlInTwodys.innerHTML = La[todayNum+197];

// Enter a date for a future Wordle solution and pick up the value from the HTML date calendar

let submitBtn = document.querySelector("#submitBtn")
let pickDate = document.querySelector('#pickDate');

submitBtn.addEventListener('click', function(event){
   console.log('Button Clicked');
   console.log(`\nThe date entered is ${pickDate.value}`);

   // Pick up the date entered in the HTML date field
   let ftrDay = new Date(pickDate.value);
   // Reset to the correct date and log the date string
   ftrDay.setDate(ftrDay.getDate() + 1);
   console.log(`\nThe date string is ${ftrDay}`);

   // Convert the future date to its day number
   let ftrDayNum = Math.ceil((ftrDay - new Date(ftrDay.getFullYear(),0,1)) / 86400000);
   console.log(`The future day number is ${ftrDayNum}`);

   // Write the future wordle and its soulution number to the HTML doc
   let ftrWrdlNum = document.querySelector(".ftrWrdlNum");
   ftrWrdlNum.innerHTML = La.findIndex(word => word == La[ftrDayNum+195])

   let ftrWrdle = document.querySelector(".ftrWrdle");
   ftrWrdle.innerHTML = La[ftrDayNum+195];

   // Toggle visibility of solution block
   document.querySelector("#toggleVisibility").style.display = "block";
   
   // Conditional IF innerHtml of element with .ftrWrdle is undefined, then alert(Please enter a date) and keep the lower portion hidden.

   if(document.querySelector(".ftrWrdle").innerHTML == 'undefined') {
      alert('Please enter a date before submitting your request');
      document.querySelector("#toggleVisibility").style.display = "none";
   }
});





