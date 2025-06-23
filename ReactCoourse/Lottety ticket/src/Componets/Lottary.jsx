import { useState } from "react"
import "./Lottary.css"
import { genTicket, sum } from "./helper.js"


export default function Lottery(){
    const [ticket, setTicket] = useState(genTicket(3));

    let isWinnig = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3))
    }
    return (
        <div className="Game">
        <h1>Lottary Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinnig && "Congratulation you won"}</h3>
        </div>
    )
}