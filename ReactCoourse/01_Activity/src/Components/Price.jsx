export default function Price({oldPrice, newPrice}){
    let oldstyles = {
        textDecorationLine: "line-through",
    }

    let newSyles = {
        fontWeight : "bold"
    }

    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newSyles}>{newPrice}</span>
        </div>
    )
}
