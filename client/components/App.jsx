import React from 'react'
import Routes from './Routes'


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
        <Routes/>
      </React.Fragment>
    )
  }

}


export default App


