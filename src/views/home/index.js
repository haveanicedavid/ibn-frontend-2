import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
const { arrayOf, shape, string, number } = React.PropTypes

const Home = React.createClass({
  propTypes: {
    snaps: arrayOf(shape({
      ltcRates: shape({
        poloniex: number,
        btce: number
      }),
      ethates: shape({
        poloniex: number,
        btce: number
      }),
      dshRates: shape({
        poloniex: number,
        btce: number
      }),
      createdAt: string
    }))
  },
  getInitialState () {
    return {
      bestEth: '',
      bestDsh: '',
      bestLtc: '',
      poloRates: {},
      btceRates: {}
    }
  },
  componentDidMount () {
    this.setState({
      bestEth: this.findBestRateProvider('ethRates'),
      bestDsh: this.findBestRateProvider('dshRates'),
      bestLtc: this.findBestRateProvider('ltcRates')
    })
  },
  findBestRateProvider (coinKey) {
    const snaps = this.props.snaps
    if (!snaps || !snaps.length) return
    const coinRates = snaps[snaps.length - 1][coinKey]
    let lowestRate = Infinity
    let lowestRateProvider
    for (let vendor in coinRates) {
      if (coinRates[vendor] < lowestRate) {
        lowestRateProvider = vendor
      }
    }
    return lowestRateProvider
  },
  render () {
    return (
      <div className='center-align'>
        <h1>Current Best Rate Provider:</h1>
        <h3>BTC to ETH: {this.state.bestEth}</h3>
        <h3>BTC to DSH: {this.state.bestDsh}</h3>
        <h3>BTC to LTC: {this.state.bestLtc}</h3>
        <Link to='/trends'>
          <Button waves='light' className='indigo darken-3'>View Trends</Button>
        </Link>
      </div>
    )
  }
})

export default Home
