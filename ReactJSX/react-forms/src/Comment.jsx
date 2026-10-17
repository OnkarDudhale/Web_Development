import { useState } from "react"
import CommentForm from "./CommentForm"
import './Comment.css'

export default function Comment() {
    let [comments, setComments] = useState([])
    let isComments = comments.length === 0
    const addComment = (newComment) => {
        setComments((currComments) => {
            return ([...currComments, newComment])
        })
    }
    return (
        <>
            <CommentForm addComment={addComment} />
            <div className="comments">
                {!isComments ?
                    <div className="heading">
                        <p>Comments</p>
                    </div> : null}
                {comments.map((currComment, idx) => (
                    <div key={idx} className="commentBox">
                        <div>@{currComment.username}</div>
                        <div>{currComment.comment}</div>
                        <div>{currComment.rating}</div>
                    </div>
                ))}
            </div>
        </>
    )
}