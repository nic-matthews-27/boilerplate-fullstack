import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import About from './About'
const Routes = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
        <li><a href="About">About</a></li>
        <li><a href="yeah-buddy">Yeah Buddy</a></li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/contact-us" component={About} />
      <Route path="yeah-buddy" component={acfasd} />
    </Router>
  )
}

export default Routes 