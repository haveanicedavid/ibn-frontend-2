import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { Navbar } from 'react-materialize'

// Routes
import Home from './views/home'
import Trends from './views/trends'

const App = React.createClass({
  getInitialState () {
    return {
      data: []
    }
  },
  componentDidMount () {
    axios.get('http://localhost:8080/api/snaps/recent')
      .then((res) => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  render () {
    const TrendsWithData = () => <Trends snaps={this.state.data} />
    return (
      <Router>
        <div>
          <Navbar className='teal' brand='IBN Test' right>
            <ul>
              <li> <Link to='/'>Home</Link> </li>
              <li> <Link to='/trends'>Trends</Link> </li>
            </ul>
          </Navbar>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/trends' component={TrendsWithData} />
        </div>
      </Router>
    )
  }
})

export default App
