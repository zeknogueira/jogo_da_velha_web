let turn = "x"
let won_moves_counter_x = []
let won_moves_counter_b = []
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
    if (turn === "b") {

        if (moves_counter_x.includes(1) && moves_counter_x.includes(2) && moves_counter_x.includes(3)) {
            won_moves_counter_x.push(1, 2, 3)
            color_result(won_moves_counter_x)

        } else
            if (moves_counter_x.includes(4) && moves_counter_x.includes(5) && moves_counter_x.includes(6)) {
                won_moves_counter_x.push(4, 5, 6)
                color_result(won_moves_counter_x)
            } else
                if (moves_counter_x.includes(7) && moves_counter_x.includes(8) && moves_counter_x.includes(9)) {
                    won_moves_counter_x.push(7, 8, 9)
                    color_result(won_moves_counter_x)
                } else
                    if (moves_counter_x.includes(1) && moves_counter_x.includes(4) && moves_counter_x.includes(7)) {
                        won_moves_counter_x.push(1, 4, 7)
                        color_result(won_moves_counter_x)
                    } else
                        if (moves_counter_x.includes(2) && moves_counter_x.includes(5) && moves_counter_x.includes(8)) {
                            won_moves_counter_x.push(2, 5, 8)
                            color_result(won_moves_counter_x)
                        } else
                            if (moves_counter_x.includes(3) && moves_counter_x.includes(6) && moves_counter_x.includes(9)) {
                                won_moves_counter_x.push(3, 6, 9)
                                color_result(won_moves_counter_x)
                            } else
                                if (moves_counter_x.includes(1) && moves_counter_x.includes(5) && moves_counter_x.includes(9)) {
                                    won_moves_counter_x.push(1, 5, 9)
                                    color_result(won_moves_counter_x)
                                } else
                                    if (moves_counter_x.includes(7) && moves_counter_x.includes(5) && moves_counter_x.includes(3)) {
                                        won_moves_counter_x.push(7, 5, 3)
                                        color_result(won_moves_counter_x)
                                    }
    }
    if (turn === "x") {
        if (moves_counter_b.includes(1) && moves_counter_b.includes(2) && moves_counter_b.includes(3)) {
            won_moves_counter_b.push(1, 2, 3)
            color_result(won_moves_counter_b)

        } else
            if (moves_counter_b.includes(4) && moves_counter_b.includes(5) && moves_counter_b.includes(6)) {
                won_moves_counter_b.push(4, 5, 6)
                color_result(won_moves_counter_b)
            } else
                if (moves_counter_b.includes(7) && moves_counter_b.includes(8) && moves_counter_b.includes(9)) {
                    won_moves_counter_b.push(7, 8, 9)
                    color_result(won_moves_counter_b)
                } else
                    if (moves_counter_b.includes(1) && moves_counter_b.includes(4) && moves_counter_b.includes(7)) {
                        won_moves_counter_b.push(1, 4, 7)
                        color_result(won_moves_counter_b)
                    } else
                        if (moves_counter_b.includes(2) && moves_counter_b.includes(5) && moves_counter_b.includes(8)) {
                            won_moves_counter_b.push(2, 5, 8)
                            color_result(won_moves_counter_b)
                        } else
                            if (moves_counter_b.includes(3) && moves_counter_b.includes(6) && moves_counter_b.includes(9)) {
                                won_moves_counter_b.push(3, 6, 9)
                                color_result(won_moves_counter_b)
                            } else
                                if (moves_counter_b.includes(1) && moves_counter_b.includes(5) && moves_counter_b.includes(9)) {
                                    won_moves_counter_b.push(1, 5, 9)
                                    color_result(won_moves_counter_b)
                                } else
                                    if (moves_counter_b.includes(7) && moves_counter_b.includes(5) && moves_counter_b.includes(3)) {
                                        won_moves_counter_b.push(7, 5, 3)
                                        color_result(won_moves_counter_b)
                                    }
    }

}                                
function color_result(won_moves_counter) {
    for (let i = 0; i < won_moves_counter.length; i++) {
        // let element = 
        document.getElementById(`square${won_moves_counter[i]}`).style.color = "green"
        //element.style.color = "green"
        console.log(i)
        console.log(won_moves_counter.length)
        // disabled.style.color = "green"       
    }
}
