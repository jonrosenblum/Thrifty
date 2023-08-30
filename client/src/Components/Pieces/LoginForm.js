import React, {useState} from "react";

export default function LoginForm({handleChangeUsername, handleChangePassword, password, username, attemptLogin}) {

    function handleSubmit(e) {
        e.preventDefault()
        attemptLogin({username, password})
    }   
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login your account</h1>
            <h2> Username</h2>
                <input
                type= "text"
                onChange={handleChangeUsername}
                placeholder="enter you username"
                value={username}
                
                />
                <br />
            <h2>Password</h2>
                <input
                type= "text"
                onChange={handleChangePassword}
                placeholder="enter you password"
                value={password}
                />
                <br />
                
                <input type="submit"
                value ='Signin'
                />
        </form>
    )};