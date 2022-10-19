/* START TASK 1: Your code goes here */
let allTableCells = document.getElementsByTagName('td')
let firstColumnCells = document.getElementsByClassName('first-column')
let specialCell = document.getElementById('green')
let table = document.getElementById('table')
function makeCellsGreen(){
    for (cell of allTableCells){
        let currentClass = cell.className
        if (!currentClass.includes('yellow') && !currentClass.includes('blue')){
            cell.className = `${currentClass} green`
        }
        if (specialCell.className.includes('blue')){
            specialCell.className = 'second-row blue'
        } else {
            specialCell.className = 'second-row green'
        }
    }
    table.className = 'green'
}
function makeCellsYellow(e) {
    let element = e.target
    let currentClass = element.className
    if (!currentClass.includes('first-column')){
        element.className = `${currentClass} yellow`
    }
}
function makeRowBlue(e){
    let element = e.target
    let currentClass = element.className
    if (currentClass.includes('first-row')){
        let firstRowCells = document.getElementsByClassName('first-row')
        let flag = true;
        for (let firstRowCell of firstRowCells){
            let currentClass = firstRowCell.className
            if (currentClass.includes('yellow')){
                flag = false;
                break;
            }
        }
        for (let firstRowCell of firstRowCells){
            let currentClass = firstRowCell.className
            if (flag){
                firstRowCell.className = `${currentClass} blue`
            }
        }
    } else if (currentClass.includes('second-row')){
        let secondRowCells = document.getElementsByClassName('second-row')
        let flag = true;
        for (let secondRowCell of secondRowCells){
            let currentClass = secondRowCell.className
            if (currentClass.includes('yellow')){
                flag = false;
                break;
            }
        }
        for (let secondRowCell of secondRowCells){
            let currentClass = secondRowCell.className
            if (flag){
                secondRowCell.className = `${currentClass} blue`
            }
        }
    } else if (currentClass.includes('third-row')){
        let thirdRowCells = document.getElementsByClassName('third-row')
        let flag = true;
        for (let thirdRowCell of thirdRowCells){
            let currentClass = thirdRowCell.className
            if (currentClass.includes('yellow')){
                flag = false;
                break;
            }
        }
        for (let thirdRowCell of thirdRowCells){
            let currentClass = thirdRowCell.className
            if (flag){
                thirdRowCell.className = `${currentClass} blue`
            }
        }
    }
}
for (let cell of allTableCells) {
    cell.addEventListener('click', (e) => {
        makeCellsYellow(e)
    });
}
for (let firstcells of firstColumnCells) {
    firstcells.addEventListener('click', (e) => {
        makeRowBlue(e)
    });
}
specialCell.addEventListener('click', (e) => {
    makeCellsGreen(e)
});
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let button = document.getElementById('button')
let form = document.getElementById("myForm");
let input = document.getElementById('type-text')
let regExp = new RegExp('^\\+380[0-9]{9}$', 'g')
let flag = false;

form.addEventListener('submit', handleForm);
function handleForm(event){
    event.preventDefault(); 
}
input.addEventListener('input', () => {
    validateInput()
}); 
function validateInput(){
    let text = input.value
    flag = regExp.test(text);
    if (flag){
         successe()
    } else {
        fail()
    }
}
function fail(){
    button.setAttribute('disabled', 'true');
    input.setAttribute('class', 'fail')
    let div = document.getElementById('target');
    if (div){
        div.innerText = 'Type number does not follow format +380*********'
        div.setAttribute('id', 'notificationBad')
    }
}
function successe(){
    button.removeAttribute('disabled');
    input.removeAttribute('class');
}
function submitToServer(){
    try{
        if (flag){
            let div = document.getElementById('target');
            if (div){
                div.innerText = 'Data was successfully sent'
                div.setAttribute('id', 'notificationGood')
            } else {
                let div = document.getElementById('notificationBad');
                div.innerText = 'Data was successfully sent'
                div.setAttribute('id', 'notificationGood')
            }
        } else {
            validateInput()
        }
    } catch(e){
        console.log('I will work on it');
    }
}  
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
