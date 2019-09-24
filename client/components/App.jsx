import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import Contact from './Contact'
import About from './About'
import Yeah from './Yeah'


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
      <Router>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Like</button>
        <Nav />
        <Form />
        <Route path="/contact" component={Contact} />
        <Route path="/yeah-buddy" component={Yeah} />
        <Route path="/About" component={About} />
      </Router>
    )
  }

}


export default App


