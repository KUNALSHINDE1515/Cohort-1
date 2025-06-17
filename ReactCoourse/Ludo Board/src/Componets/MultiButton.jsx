import { useState } from "react"

function MultiButton() {

    const [moves, setMoves] = useState({
        red: 0,
        black: 0,
        yellow:0,
        purple:0
    });

    let updateRed = () => {
        setMoves((previoursMoves) => {
            return {...previoursMoves,  red : previoursMoves.red + 1}
        });
    }

    let updateBlack = () => {
        setMoves((previoursMoves) => {
            return {...previoursMoves, black: previoursMoves.black + 1}
        })
    }

    let updatePurple = () => {
        setMoves((previoursMoves) => {
            return {...previoursMoves, purple: previoursMoves.purple + 2}
        })
    }

    let updateYellow = () => {
        setMoves((previoursMoves) => {
            return {...previoursMoves, yellow: previoursMoves.yellow + 3
            }
        })
    }

    return (
        <>
        <div className='LudoContainer'>
            <p>Red Moves : {moves.red} </p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            <p>Black Moves : {moves.black} </p>
            <button style={{backgroundColor: "black"}} onClick={updateBlack}>+1</button>
            <p>Yellow Moves : {moves.yellow} </p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Purple Moves : {moves.purple}</p>
            <button style={{backgroundColor: "purple"}} onClick={updatePurple}>+1</button>
        </div>
        </>
    )
}

export default MultiButton
