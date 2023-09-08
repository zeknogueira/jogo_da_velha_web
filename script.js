let turn = "x"
let moves_counter_x = []
let moves_counter_b = []
function insert_move(square_selected) {
    const square_turn = document.getElementById(`square${square_selected}`)
    square_turn.disabled = true
    console.log(square_turn)
    if (turn === "x") {
        moves_counter_x.push(square_selected)
        text = document.createTextNode("X")
        square_turn.appendChild(text)
        turn = "b"
        console.log(turn)
        console.log("the moves of X are " + moves_counter_x)
    }
    else {
        moves_counter_b.push(square_selected)
        text = document.createTextNode("O")
        square_turn.appendChild(text)
        turn = "x"
        console.log(turn)
        console.log("the moves of O are " + moves_counter_b)
    }
    result_check()
}

function result_check() {
    if (moves_counter_x.includes(1) && moves_counter_x.includes(2) && moves_counter_x.includes(3) ||
        moves_counter_x.includes(4) && moves_counter_x.includes(5) && moves_counter_x.includes(6) ||
        moves_counter_x.includes(7) && moves_counter_x.includes(8) && moves_counter_x.includes(9) ||
        moves_counter_x.includes(1) && moves_counter_x.includes(4) && moves_counter_x.includes(7) ||
        moves_counter_x.includes(2) && moves_counter_x.includes(5) && moves_counter_x.includes(8) ||
        moves_counter_x.includes(3) && moves_counter_x.includes(6) && moves_counter_x.includes(9) ||
        moves_counter_x.includes(1) && moves_counter_x.includes(5) && moves_counter_x.includes(9) ||
        moves_counter_x.includes(7) && moves_counter_x.includes(5) && moves_counter_x.includes(3)) {
        console.log("x won")
    }
    else
        if (moves_counter_b.includes(1) && moves_counter_b.includes(2) && moves_counter_b.includes(3) ||
            moves_counter_b.includes(4) && moves_counter_b.includes(5) && moves_counter_b.includes(6) ||
            moves_counter_b.includes(7) && moves_counter_b.includes(8) && moves_counter_b.includes(9) ||
            moves_counter_b.includes(1) && moves_counter_b.includes(4) && moves_counter_b.includes(7) ||
            moves_counter_b.includes(2) && moves_counter_b.includes(5) && moves_counter_b.includes(8) ||
            moves_counter_b.includes(3) && moves_counter_b.includes(6) && moves_counter_b.includes(9) ||
            moves_counter_b.includes(1) && moves_counter_b.includes(5) && moves_counter_b.includes(9) ||
            moves_counter_b.includes(7) && moves_counter_b.includes(5) && moves_counter_b.includes(3)) {
            console.log("b won")

    }
}   