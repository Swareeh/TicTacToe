const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')

// POPUP
const result_popup = document.getElementById('result_popup')
const popup_heading = document.getElementById('popup_heading')
const popup_description = document.getElementById('popup_description')

// let gameOver = false
let PlayerTurn = 'X'

function Play(event) {


    if (PlayerTurn == 'X') {
        if (event.srcElement.innerHTML == 'X' || event.srcElement.innerHTML == 'O') { }
        else {
            event.srcElement.innerHTML = PlayerTurn
            PlayerTurn = 'O'
        }

    } else if (PlayerTurn == 'O') {
        if (event.srcElement.innerHTML == 'X' || event.srcElement.innerHTML == 'O') { }
        else {
            event.srcElement.innerHTML = PlayerTurn
            PlayerTurn = 'X'
        }
    }

    const result = Ref()

    if (result == 'Game Over') {
        popup_heading.innerHTML = '🤝 It\'s a Draw!'
        popup_description.innerHTML = 'No winner this time — it’s a perfect tie. Want to play again?'
        result_popup.style.display = 'flex'
        return
    }
    else if (result == `X Wins`) {
        popup_heading.innerHTML = '🎉 Player X Wins!'
        popup_description.innerHTML = 'Congratulations! Player X has claimed victory. Ready for rematch?'
        result_popup.style.display = 'flex'

    } else if (result == `O Wins`) {
        result_popup.style.display = 'flex'
        popup_heading.innerHTML = '🎉 Player O Wins!'
        popup_description.innerHTML = 'Congratulations! Player O has claimed victory. Ready for rematch?'
    }

}

function Ref() {

    //Checking Horizontally 
    if (['X', 'O'].includes(box1.innerHTML) && box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML) {
        return `${box1.innerHTML} Wins`

    } else if (['X', 'O'].includes(box4.innerHTML) && box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML) {
        return `${box4.innerHTML} Wins`

    } else if (['X', 'O'].includes(box7.innerHTML) && box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML) {
        return `${box7.innerHTML} Wins`
    }

    //Checking Verticlly
    else if (['X', 'O'].includes(box1.innerHTML) && box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML) {
        return `${box1.innerHTML} Wins`

    } else if (['X', 'O'].includes(box2.innerHTML) && box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML) {
        return `${box2.innerHTML} Wins`

    } else if (['X', 'O'].includes(box3.innerHTML) && box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML) {
        return `${box3.innerHTML} Wins`

        // Checking Diagonally
    } else if (['X', 'O'].includes(box1.innerHTML) && box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML) {
        return `${box1.innerHTML} Wins`

    } else if (['X', 'O'].includes(box3.innerHTML) && box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML) {
        return `${box3.innerHTML} Wins`
    }

    //Checking if there are any empty boxes left 
    let emptyspace = false

    for (let i = 1; i <= 9; i++) {
        let box = document.getElementById('box' + String(i))
        if (box.innerHTML == '') {
            emptyspace = true
        }
    }

    if (emptyspace == false) {
        return 'Game Over'
    }

}
