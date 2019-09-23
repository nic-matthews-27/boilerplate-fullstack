import React from 'react'

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: "Yeah Buddy"
        }
    }
    render(){
        return(
            this.state.message
        )
    }
}

export default About