import React from 'react'

import About from './About'

import { HashRouter as Router, Route, Link } from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Yeah Buddy",
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Like</button>
        <Router>
          <ul>
            <li><Link to="/contact-us">Contact us</Link></li>
            <li><a href="About">About</a></li>
            <li><a href="yeah-buddy">Yeah Buddy</a></li>
          </ul>
          <Route path = "/contact-us" component ={About}/>
        </Router>
      </React.Fragment>
    )
  }

}


export default App


