// const box1 = document.getElementById('box1')
// const box2 = document.getElementById('box2')
// const box3 = document.getElementById('box3')
// const box4 = document.getElementById('box4')
// const box5 = document.getElementById('box5')
// const box6 = document.getElementById('box6')
// const box7 = document.getElementById('box7')
// const box8 = document.getElementById('box8')
// const box9 = document.getElementById('box9')

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


    if (Ref() == 'Game Over') {
        alert('Game is over! Draw')
        return
    } else if (Ref() == `${document.getElementById('box1').innerHTML} Wins`) {
        alert(`Game is over! ${document.getElementById('box1').innerHTML} Wins`)
    }

}

function Ref() {

    if (document.getElementById('box1').innerHTML == document.getElementById('box2').innerHTML == document.getElementById('box3').innerHTML in ['X','O']) {
        return `${document.getElementById('box1').innerHTML} Wins`
    }





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
