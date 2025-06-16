function doSomething(event){
    console.log("Hello !");
    console.log(event);
    
    
}

function printBye(){
    console.log("Byee!!!");
    
}

function handleDbl(){
    console.log("You double clicked");
    
}
export default function Button(){
    return(
        <>
        <button onClick={doSomething} >Click ME! </button>
        <p onMouseOver={printBye}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aliquid facere animi natus hic atque enim earum vitae voluptatum aut amet ea quia, dignissimos provident quis commodi ex fuga corporis temporibus nisi molestias mollitia! Veniam fuga magni eos tempore esse, sequi dignissimos amet ex. Reiciendis blanditiis possimus aut deserunt ratione.</p>
        <button onDoubleClick={handleDbl}> Double cliked ME!</button>
        </>
    )
}