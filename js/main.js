const container = document.querySelector('#container');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.letter');
const table = document.querySelector('#table');
const rows = table.querySelectorAll('.row');

let initRowNum = 0;
let initCellNum = 0;

keys.forEach(key => {
    key.addEventListener('click', () => {
        rows[initRowNum].querySelectorAll('div')[initCellNum].textContent =  key.textContent
        i++
        if(initCellNum === 8){
            initCellNum = 0;
            initRowNum++;
        }
    });
});


