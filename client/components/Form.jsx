import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        const message = ''
        if (event.target.name == 'password' && event.target.value.length < 8) {
            message = "Password is too short"
        }
        this.setState({
            [event.target.name]: event.target.value,
            passwordMessage: message,
        })

    }

    handleSubmit() {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <label>Email:<input type="text" name="email" onChange={this.handleChange} /></label>
                    <label>Password:<input type="password" name="password" onChange={this.handleChange} /></label>
                    <button>Submit </button>
                </form>
            </div>
        )
    }
}
export default Form