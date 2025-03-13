const box1 = document.getElementById('r1c1')
const box2 = document.getElementById('r1c2')
const box3 = document.getElementById('r1c3')
const box4 = document.getElementById('r2c1')
const box5 = document.getElementById('r2c2')
const box6 = document.getElementById('r2c3')
const box7 = document.getElementById('r3c1')
const box8 = document.getElementById('r3c2')
const box9 = document.getElementById('r3c3')


function PlayerX() {
    var turnOver = false

    box1.addEventListener('click', function () {
        if (turnOver)return
        if (box1.innerHTML == 'X' || box1.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box1.innerHTML = 'X'
            turnOver = true
        }
    })


    box2.addEventListener('click', function () {
        if (turnOver)return
        if (box2.innerHTML == 'X' || box2.innerHTML == 'O') {
            console.log('Slot already filled!')

        } else {
            box2.innerHTML = 'X'
            turnOver = true
        }
    })

    box3.addEventListener('click', function () {
        if (turnOver)return
        if (box3.innerHTML == 'X' || box3.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box3.innerHTML = 'X'
            turnOver = true
        }
    })
    
    box4.addEventListener('click', function () {
        if (turnOver)return
        if (box4.innerHTML == 'X' || box4.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box4.innerHTML = 'X'
            turnOver = true
        }
    })

    
    box5.addEventListener('click', function () {
        if (turnOver)return
        if (box5.innerHTML == 'X' || box5.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box5.innerHTML = 'X'
            turnOver = true
        }
    })
    
    box6.addEventListener('click', function () {
        if (turnOver)return
        if (box6.innerHTML == 'X' || box6.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box6.innerHTML = 'X'
            turnOver = true
        }
    })
    
    box7.addEventListener('click', function () {
        if (turnOver)return
        if (box7.innerHTML == 'X' || box7.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box7.innerHTML = 'X'
            turnOver = true
        }
    })
    
    box8.addEventListener('click', function () {
        if (turnOver)return
        if (box8.innerHTML == 'X' || box8.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box8.innerHTML = 'X'
            turnOver = true
        }
    })
    
    box9.addEventListener('click', function () {
        if (turnOver)return
        if (box9.innerHTML == 'X' || box9.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box9.innerHTML = 'X'
            turnOver = true
        }
    })    
}

function PlayerO() {
    var turnOver = false

    box1.addEventListener('click', function () {
        if (turnOver)return
        if (box1.innerHTML == 'X' || box1.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box1.innerHTML = 'O'
            turnOver = true
        }
    })


    box2.addEventListener('click', function () {
        if (turnOver)return
        if (box2.innerHTML == 'X' || box2.innerHTML == 'O') {
            console.log('Slot already filled!')

        } else {
            box2.innerHTML = 'O'
            turnOver = true
        }
    })

    box3.addEventListener('click', function () {
        if (turnOver)return
        if (box3.innerHTML == 'X' || box3.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box3.innerHTML = 'O'
            turnOver = true
        }
    })
    
    box4.addEventListener('click', function () {
        if (turnOver)return
        if (box4.innerHTML == 'X' || box4.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box4.innerHTML = 'O'
            turnOver = true
        }
    })

    
    box5.addEventListener('click', function () {
        if (turnOver)return
        if (box5.innerHTML == 'X' || box5.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box5.innerHTML = 'O'
            turnOver = true
        }
    })
    
    box6.addEventListener('click', function () {
        if (turnOver)return
        if (box6.innerHTML == 'X' || box6.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box6.innerHTML = 'O'
            turnOver = true
        }
    })
    
    box7.addEventListener('click', function () {
        if (turnOver)return
        if (box7.innerHTML == 'X' || box7.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box7.innerHTML = 'O'
            turnOver = true
        }
    })
    
    box8.addEventListener('click', function () {
        if (turnOver)return
        if (box8.innerHTML == 'X' || box8.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box8.innerHTML = 'O'
            turnOver = true
        }
    })
    
    box9.addEventListener('click', function () {
        if (turnOver)return
        if (box9.innerHTML == 'X' || box9.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box9.innerHTML = 'O'
            turnOver = true
        }
    })    
}

