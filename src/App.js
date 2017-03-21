import React from 'react'
import axios from 'axios'
import './App.css'
import Chart from './components/chart'
import { Navbar, NavItem } from 'react-materialize'

const App = React.createClass({
  getInitialState () {
    return {
      data: []
    }
  },
  componentDidMount () {
    axios.get('http://localhost:8080/api/snaps/all')
      .then((res) => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  render () {
    const dataList = this.state.data.map((obj) => {
      return <li key={obj._id}>{obj._id}</li>
    })
    const ethToBtc = this.state.data.map((snap) => {
      return {
        created: Date.parse(snap.createdAt),
        btce: snap.ethRates.btce,
        poloniex: snap.ethRates.poloniex
      }
    })
    return (
      <div>
        <Navbar brand='IBN Test' right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        <h1>Ohai</h1>
        <Chart chartData={ethToBtc} />
        <pre><code>{JSON.stringify(this.state.data)}</code></pre>
        <ul>
          {dataList}
        </ul>
      </div>
    )
  }
})

export default App
