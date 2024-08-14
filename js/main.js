const container = document.querySelector('#container');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.letter');
const table = document.querySelector('#table');
const rows = table.querySelectorAll('.row');

const send = document.querySelector("#write")
const lastItem = document.querySelector("#delete")
let word = "COLOMBIA"

let initRowNum = 0;
let initCellNum = 0;

let actualRow 
keys.forEach(key => {
    key.addEventListener('click', () => {
        if(initCellNum !== 8){
            actualRow = rows[initRowNum].querySelectorAll('div')
            actualRow[initCellNum].textContent =  key.textContent
            initCellNum++;
            console.log(initCellNum)
        }
    });
});

lastItem.addEventListener('click', () => {
    if(initCellNum > 0){
        initCellNum--
        actualRow[initCellNum].textContent = ""
    }
    })

send.addEventListener('click', () => {
    for (let i = 0; i < actualRow.length ; i++) {
        if(actualRow[i].textContent === word[i]){
            actualRow[i].classList.add('correct')
        }else if(word.includes(actualRow[i].textContent)){
            actualRow[i].classList.add('wrongPlace')
        }else{
            actualRow[i].classList.add('incorrect')
        }
        actualRow[i].classList.add('animation')
      }
    initCellNum = 0;
    initRowNum++;
    })


