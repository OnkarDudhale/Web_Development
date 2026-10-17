import { useState } from "react"
import './LikeButton.css';
export default function LikeButton() {
    const [isLiked, setIsLIked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const toggleLike = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
        }
        setIsLIked(!isLiked);

    }
    return (
        <div className="block">
            <p onClick={toggleLike} className="like">
                {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </p>
            <p className="countLike">{likeCount}</p>
        </div>
    )
}