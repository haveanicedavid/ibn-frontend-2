import React from 'react'
import { Link } from 'react-router-dom'
const { array } = React.PropTypes

const Trends = React.createClass({
  propTypes: {
    data: array
  },
  findBestRateProvider (coinKey) {
    if (!this.props.data.length) return
    const coinRates = this.props.data[this.props.data.length - 1][coinKey] // grab most recent coinRates
    let lowestRate = 100000000
    let lowestRateProvider
    for (let vendor in coinRates) {
      if (coinRates[vendor] < lowestRate) {
        lowestRate = coinRates[vendor]
        lowestRateProvider = vendor
      }
    }
    return lowestRateProvider
  },
  render () {
    const bestEth = this.findBestRateProvider('ethRates')
    const bestDsh = this.findBestRateProvider('dshRates')
    const bestLtc = this.findBestRateProvider('ltcRates')
    return (
      <div className='center-align'>
        <h1>Home page</h1>
        <h3>Best BTC to ETH provider: <Link to='/trends'>{bestEth}</Link></h3>
        <h3>Best BTC to DSH provider: <Link to='/trends'>{bestDsh}</Link></h3>
        <h3>Best BTC to LTC provider: <Link to='/trends'>{bestLtc}</Link></h3>
      </div>
    )
  }
})

export default Trends
