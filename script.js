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
    if (moves_counter_x.includes(1) && moves_counter_x.includes(2) && moves_counter_x.includes(3)) {
        /*color_result(won_moves_counter_x)*/
        won_moves_counter_x.push([1,2,3])
        console.log("the array is" + won_moves_counter_x)
        color_result(won_moves_counter_x)
        
    } else
        if (moves_counter_x.includes(4) && moves_counter_x.includes(5) && moves_counter_x.includes(6)) {
            color_result(won_moves_counter_x[4, 5, 6])
        } else
            if (moves_counter_x.includes(7) && moves_counter_x.includes(8) && moves_counter_x.includes(9)) {
                color_result(won_moves_counter_x[7, 8, 9])
            } else
                if (moves_counter_x.includes(1) && moves_counter_x.includes(4) && moves_counter_x.includes(7)) {
                    color_result(won_moves_counter_x[1, 4, 7])
                } else
                    if (moves_counter_x.includes(2) && moves_counter_x.includes(5) && moves_counter_x.includes(8)) {
                        color_result(won_moves_counter_x[2, 5, 8])
                    } else
                        if (moves_counter_x.includes(3) && moves_counter_x.includes(6) && moves_counter_x.includes(9)) {
                            color_result(won_moves_counter_x[3, 6, 9])
                        } else
                            if (moves_counter_x.includes(1) && moves_counter_x.includes(5) && moves_counter_x.includes(9)) {
                                color_result(won_moves_counter_x[1, 5, 9])
                            } else
                                if (moves_counter_x.includes(7) && moves_counter_x.includes(5) && moves_counter_x.includes(3)) {
                                    color_result(won_moves_counter_x[7, 5, 3])
                                }
}
function color_result(won_moves_counter_x){
    for (let i = 0; i < won_moves_counter_x.length; i++) {
        document.getElementById(`square${i}`)disabled.style.color = "green"       
    }
}
/*
erro na seleção do elemento pelo id na função color_result. Possível solução em:
https://pt.stackoverflow.com/questions/143824/alterar-classe-de-um-button-quando-ele-estiver-desabilitado-e-vice-versa
*/

/*
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
*/