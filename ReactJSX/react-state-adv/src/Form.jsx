import { useState } from "react"

export default function Form() {
    let [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleFormDataChange = (event) => {
        setFormData((info) => {
            return ({ ...info, [event.target.name]: event.target.value })
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input value={formData.username} onChange={handleFormDataChange} type="text" id="username" name="username" />
            <br />
            <br />
            <label htmlFor="email">UserEmail</label>
            <input value={formData.email} onChange={handleFormDataChange} type="text" id="email" name="email" />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input value={formData.password} onChange={handleFormDataChange} type="password" id="password" name="password" />
            <br />
            <br />
            <button type="submit">submit</button>
        </form>
    )
}