import React from 'react'

export default function Form(){
    return(
        <div>
            <h1>Sign up</h1>
            <form>
                <label>Email:<input type="text" name= "email" /></label>
                <label>Password:<input type="password" name= "password" /></label>
            </form>
        </div>
    )
}