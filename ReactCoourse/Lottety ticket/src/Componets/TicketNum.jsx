import "./TicketNum.css"

function TicketNum({num}) {
    console.log(`Ticker number ${num}`);
    
    return (
        <>
        <span className="TicketNum">{num}</span>
        </>
    )
}

export default TicketNum
