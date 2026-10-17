import { useState } from "react"
import { useFormik } from 'formik';
import './Form.css'
export default function Form() {
    // let [formData, setFormData] = useState({ username: "", email: "", password: "" });
    //const formik.handleChange = (event) => {
    //     setFormData((info) => {
    //         return ({ ...info, [event.target.name]: event.target.value })
    //     })
    // }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData);
    // }
    const validate = values => {
        const errors = {};

        if (!values.username) {
            errors.username = 'username must be present';
        } else if (values.username.length > 15) {
            errors.username = 'Must be 15 characters or less';
        }
        if (!values.email) {
            errors.email = 'email cannot be empty';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'password field cannot be empty';
        }



        return errors;
    };
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
        <h2>Formik Validation Support Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input value={formik.values.username} onChange={formik.handleChange} type="text" id="username" name="username" />
                    {formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
                </div>
                <div className="email">
                    <label htmlFor="email">UserEmail</label>
                    <input value={formik.values.email} onChange={formik.handleChange} type="text" id="email" name="email" />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input value={formik.values.password} onChange={formik.handleChange} type="password" id="password" name="password" />
                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                </div>
                <div className="button">
                    <button type="submit">submit</button>
                </div>
            </form>
        </>
    )
}