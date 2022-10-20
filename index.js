/* START TASK 1: Your code goes here */
let allTableCells = document.getElementsByTagName('td')
let firstColumnCells = document.getElementsByClassName('first-column')
let specialCell = document.getElementById('green')
let table = document.getElementById('table')
function makeCellsGreen(){
    for (let cell of allTableCells){
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
let form = document.getElementById('myForm');
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
let court = document.getElementById('court')
let ball = document.getElementById('ball')
let ballXYsize = 20;
let teamAHoop = document.getElementById('teamA')
let teamBHoop = document.getElementById('teamB')
let hoopXYsize = 15;
let teamAScore = document.getElementById('teamAscore')
let teamBScore = document.getElementById('teamBscore')
let teamAScoreText = teamAScore.innerText
let teamBScoreText = teamBScore.innerText
let scoreboard = document.getElementById('scoreboard')
let seconds3 = 3000;
function getCoordinatesX(elem){
    let coordinates = elem.getBoundingClientRect();
    let xOfelem = coordinates.x;
    return xOfelem
}
function getCoordinatesY(elem){
    let coordinates = elem.getBoundingClientRect();
    let xOfelem = coordinates.y;
    return xOfelem
}
court.addEventListener('click', function(){
    let courtXCoordinate = getCoordinatesX(court);
    let courtYCoordinate = getCoordinatesY(court);
    let top = obj.y - courtYCoordinate - ballXYsize + 'px';
    ball.style.top = top
    let left = obj.x - courtXCoordinate - ballXYsize + 'px';
    ball.style.left = left
    let tAHYC = getCoordinatesY(teamAHoop);
    let tAHXC = getCoordinatesX(teamAHoop);
    let tBHYC = getCoordinatesY(teamBHoop);
    let tBHXC = getCoordinatesX(teamBHoop);
    teamAScoreText = teamAScore.innerText
    teamBScoreText = teamBScore.innerText
    if (obj.y >= tAHYC && obj.y <= tAHYC + hoopXYsize && obj.x >= tAHXC && obj.x <= tAHXC + hoopXYsize){
        changeBScore(1)
        showWhoScored('B','red')
        setTimeout(hideScore, seconds3)
    } else if (obj.y >= tBHYC && obj.y <= tBHYC + hoopXYsize && obj.x >= tBHXC && obj.x <= tBHXC + hoopXYsize){
        changeAScore(1)
        showWhoScored('A', 'azure')
        setTimeout(hideScore, seconds3)
    }
});
let obj = {
    x : 0,
    y : 0
}
window.addEventListener('mousemove', function(e){
    obj.x = e.x;
    obj.y = e.y
})
teamAScore.addEventListener('teamAScored', function(e){
    teamAScore.textContent = e.detail.number;
})
function changeAScore(num){
    let event = new CustomEvent('teamAScored', {
        detail: {
            number : +teamAScoreText + num
        }
    })
teamAScore.dispatchEvent(event)
}
teamBScore.addEventListener('teamBScored', function(e){
    teamBScore.textContent = e.detail.number;
})
function changeBScore(num){
    let event = new CustomEvent('teamBScored', {
        detail: {
            number : +teamBScoreText + num
        }
    })
teamBScore.dispatchEvent(event)
}
scoreboard.addEventListener('whoScored', function(e){
    scoreboard.textContent = e.detail.text;
    scoreboard.className = e.detail.las
})
function showWhoScored(lett, clas){
    let event = new CustomEvent('whoScored', {
        detail: {
            text : `Team ${lett} score!`,
            las : `${clas}`
        }
    })
scoreboard.dispatchEvent(event)
}
function hideScore(){
    scoreboard.setAttribute('class', 'none')
}
/* END TASK 3 */