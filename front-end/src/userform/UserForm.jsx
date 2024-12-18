// React Component
import { useState } from "react";
import "./FormStyles.css";

const UserForm = () => {

    const [name , setName] =useState('')
    const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')
    const [repeatpassword , setRepeatPassword] =useState('')
    const [accept , setAccept] =useState(false)

    console.log(name);
    console.log(email);
    console.log(password);
    

    const Submit = (e) => {
        e.preventDefault();
        setAccept(true)
    };
    return (
        <div className="form-container">
            <form onSubmit={Submit} className="user-form">
                <div className="form-group">
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="text"
                        id="Password"
                        name="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {password.length < 8 && accept && <p>password must be more than 8 digits</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="Repeat Password">Repeat Password:</label>
                    <input
                        type="Repeat Password"
                        id="Repeat Password"
                        name="Repeat Password"
                        placeholder="Enter your Repeat Password"
                        value={repeatpassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {repeatpassword == password && {accept} ? '' : "password doesn't match"}
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
