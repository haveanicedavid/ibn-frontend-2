import React from 'react'
import Chart from '../../components/chart'
const { array } = React.PropTypes
const Trends = React.createClass({
  propTypes: {
    data: array
  },
  render () {
    const ethToBtc = getRates(this.props.snaps, 'ethRates')
    const ltcToBtc = getRates(this.props.snaps, 'ltcRates')
    const dshToBtc = getRates(this.props.snaps, 'dshRates')
    return (
      <div>
        <h1 className='center-align'>Conversion Rates</h1>
        <Chart chartData={ethToBtc} title='ETH to BTC' coin='ETH' />
        <Chart chartData={ltcToBtc} title='LTC to BTC' coin='LTC' />
        <Chart chartData={dshToBtc} title='DSH to BTC' coin='DSH' />
      </div>
    )
  }
})

function getRates (data, currency) {
  return data.map((snap) => {
    return {
      created: Date.parse(snap.createdAt),
      btce: snap[`${currency}`].btce,
      poloniex: snap[`${currency}`].poloniex
    }
  })
}

export default Trends
