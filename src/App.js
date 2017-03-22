import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from 'react-materialize'
import './App.css'

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
    const fetchData = () => {
      // Create new snap
      axios.post('http://localhost:8080/api/snaps/create')
        .catch(err => console.log(err))
      // Fetch snaps
      axios.get('http://localhost:8080/api/snaps/recent')
        .then(res => this.setState({ data: res.data }))
        .catch(err => console.log(err))
    }
    fetchData()
    // NOTE I would never build something like this in production, as it will Create
    // new snaps on an interval for every user that visits the page. I just used it
    // as  a quick and dirty way to populate data, instead of setting a scheduler
    // on the backend. Creates and fetches once a minute
    setInterval(fetchData, 60000)
  },
  render () {
    const TrendsWithData = () => <Trends snaps={this.state.data} />
    const HomeWithData = () => <Home data={this.state.data} />
    return (
      <Router>
        <div>
          <Navbar className='indigo' brand='IBN Test' right>
            <ul>
              <li> <Link to='/'>Home</Link> </li>
              <li> <Link to='/trends'>Trends</Link> </li>
            </ul>
          </Navbar>

          <Route exact path='/' component={HomeWithData} />
          <Route path='/trends' component={TrendsWithData} />
        </div>
      </Router>
    )
  }
})

export default App
