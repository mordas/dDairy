"use strict"
let parentElem = document.body;
let dairy = {};
let btnMin = document.getElementById('min'),
    btnNorm = document.getElementById('norm'),
    btnMax = document.getElementById('max'),
    btnFix = document.getElementById('fix');


    

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


btnMin.addEventListener('click',rndAsk(12));


///rndAsk(10);
///console.log(dairy);

