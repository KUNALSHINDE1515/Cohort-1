import { useState } from "react";

function LudoBoard() {
    let [moves, setMoves] = useState({
            blue: 0, 
            red: 0,
            yellow: 0,
            greeen: 0
        });
        let updateBlue = () => {
            console.log('moves = ',moves.blue);
            setMoves((prevMoves) => {
               return {...prevMoves, blue: prevMoves.blue + 1 }
            })
        }

        let updateYellow = () => {
            setMoves((prevMoves)=> {
                return {...prevMoves, yellow: prevMoves.yellow + 1}
            })
        }
        let updateGreen = () => {
            setMoves((prevMoves) => {
                return {...prevMoves, greeen: prevMoves.greeen + 1}
            })
        }
        let updateRed = () => {
            setMoves((prevMoves) => {
                return{...prevMoves, red: prevMoves.red + 1}
            })
        }
    return (
        <>
        <p>Game Begins</p>
        <div className="board">
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor: "Blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor: "Yellow"}} onClick={updateYellow}>+1</button>
            <p>Green Moves = {moves.greeen}</p>
            <button style={{backgroundColor: "Green"}} onClick={updateGreen}>+1</button>
            <p >Red Moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>

        </div>
        </>
    )
}

export default LudoBoard;
