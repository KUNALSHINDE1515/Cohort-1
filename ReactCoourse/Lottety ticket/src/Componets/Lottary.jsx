import { useState } from "react"
import { genTicket, sum } from "./helper.js"
import Ticket from "./Ticket";

export default function Lottery({n=3 ,winningSum = 15, winCondition}){
    const [ticket, setTicket] = useState(genTicket(n));

    let isWinnig = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    return (

        <div className="Game">
        <h1>Lottary Game!</h1>
       <Ticket ticket={ticket} />
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3 style={{color: isWinnig ? "green" : "red"}}>{isWinnig && "Congratulation you won"}</h3>
        </div>
    )
}