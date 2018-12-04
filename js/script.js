"use strict"
let parentElem = document.body;
let dairy = {};
let btnMin = document.querySelector('#min'),
    btnNorm = document.querySelector('#norm'),
    btnMax = document.querySelector('#max'),
    btnFix = document.querySelector('#fix');


    

let rndAsk = (num) => {
    for (let i = 0; i <= Math.random() * num; i++){
      let  ask = () => {
            let note = prompt('Напиши что-нибудь'),
                textNote = document.createElement('div');
                
                textNote.className = ('notes');
                textNote.innerHTML = note;
                parentElem.appendChild(textNote);
        
             let date = new Date(),
                 dateDiv = document.createElement('div');
                 
                 dateDiv.className = ('date');
                 dateDiv.innerHTML = `${date.getFullYear()} ${date.getMonth()} ${date.getDay()} ${date.getHours()} часов`;
                 textNote.appendChild(dateDiv);
                 dairy[date] = note;     
            };
            ask();

    }
};


btnMin.addEventListener("click", rndAsk(5));
btnNorm.addEventListener("click", rndAsk(12));
//btnMin.addEventListener("click", function(){
  //  for (let i = 0; i <= Math.random() * num; i++){

   // let note = prompt('Напиши что-нибудь'),
  //  textNote = document.createElement('div');
   // 
   // textNote.className = ('notes');
//textNote.innerHTML = note;
  //  parentElem.appendChild(textNote);});

console.log(btnMin);


///rndAsk(10);
///console.log(dairy);

