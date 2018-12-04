let parentElem = document.body;
let dairy = {};
// ask = () => {
//     let note = prompt('Напиши что-нибудь?');
//         textNote = document.createElement('div');
//         textNote.className = ('notes');
//         textNote.innerHTML = note ;
//         parentElem.appendChild(textNote);

//      let date = new Date();
//          dateDiv = document.createElement('div');
//          dateDiv.className = ('date');
//          dateDiv.innerHTML = `${date.getFullYear()} ${date.getMonth()} ${date.getDay()} ${date.getHours()} часов`;
//          textNote.appendChild(dateDiv);    
//     };
   





    

rndAsk = (num) => {
    for (let i = 0; i <= Math.random() * num; i++){
        ask = () => {
            let note = prompt('Напиши что-нибудь?');
                textNote = document.createElement('div');
                textNote.className = ('notes');
                textNote.innerHTML = note ;
                parentElem.appendChild(textNote);
        
             let date = new Date();
                 dateDiv = document.createElement('div');
                 dateDiv.className = ('date');
                 dateDiv.innerHTML = `${date.getFullYear()} ${date.getMonth()} ${date.getDay()} ${date.getHours()} часов`;
                 textNote.appendChild(dateDiv); 
                 dairy[date] = note;     
            };
            ask();

    }
}


rndAsk(10);
console.log(dairy);