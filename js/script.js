var parentElem = document.body
ask = () => {
    let note = prompt('Напиши что-нибудь?');
        div = document.createElement('div');
    div.className = ('notes');
    div.innerHTML = note ;
    parentElem.appendChild(div);
    }

rndAsk = (num) => {
    for (let i = 0; i <= Math.random() * num; i++){
        ask();
    }
}



//ask = () => {
//let note = prompt('Напиши что-нибудь?');
 //   notes = document.querySelector('.notes');
//notes.textContent = note;
//}
///ask();
rndAsk(10);
