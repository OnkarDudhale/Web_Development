import { useState } from 'react';

import './CommentForm.css';
export default function CommentForm({ addComment }) {
    let [formData, setFormData] = useState({ username: '', comment: '', rating: '' })
    const handleFormDataChange = (event) => {
        setFormData((info) => {
            return ({ ...info, [event.target.name]: event.target.value });
        })
    }
    const handleFormData = (event) => {
        event.preventDefault();
        console.log(formData);
        addComment(formData);
        setFormData({ username: '', comment: '', rating: '' });
    }
    return (
        <>
            <form className="form" onSubmit={handleFormData}>
                <div className="username">
                    <label htmlFor="username">Enter username</label>
                    <input type="text" name="username" value={formData.username} id="username" onChange={handleFormDataChange} required />
                </div>
                <div className="comment">
                    <label htmlFor="comment">Enter comment</label>
                    <textarea name="comment" id="comment" value={formData.comment} rows={5} onChange={handleFormDataChange} required></textarea>
                </div>
                <div className="rating">
                    <label htmlFor="rating">Enter rating</label>
                    <input type="number" name="rating" value={formData.rating} id="rating" max={5} min={1} onChange={handleFormDataChange} required />
                </div>
                <div className="submitButton">
                    <button type="submit">submit</button>
                </div>
            </form>

        </>

    )
}