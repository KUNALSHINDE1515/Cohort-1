import { useState } from "react";

export default function LikeButton() {
    const [isliked, setIsLiked] = useState(false);
    const [click, setClicked] = useState(0);
    let toggleLike = () => {
       setIsLiked(!isliked)
       setClicked(click + 1)
    
        
    }
    let likeStyles = {
        color: "red"
    }
    return(
        <>
        <p>Clicks = {click}</p>
        <p onClick={toggleLike}>
            {
                isliked ? (
                <i className="fa-solid fa-heart" style={likeStyles}></i>
            ) : (
          <i class="fa-regular fa-heart"></i>
        )}
           </p>
        </>
    )
}