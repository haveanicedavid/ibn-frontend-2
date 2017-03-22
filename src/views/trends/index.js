import React from 'react'
import Chart from '../../components/chart'
const { arrayOf, shape, string, number } = React.PropTypes
const Trends = React.createClass({
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
      ethToBtc: [],
      ltcToBtc: [],
      dshToBtc: []
    }
  },
  componentDidMount () {
    this.setState({
      ethToBtc: this.getRates('ethRates'),
      ltcToBtc: this.getRates('ltcRates'),
      dshToBtc: this.getRates('dshRates')
    })
  },
  getRates (currency) {
    return this.props.snaps.map((snap) => {
      return {
        created: Date.parse(snap.createdAt),
        'BTC-E': snap[`${currency}`].btce,
        Poloniex: snap[`${currency}`].poloniex
      }
    })
  },
  render () {
    return (
      <div>
        <h1 className='center-align'>Conversion Rates</h1>
        <p className='center-align'>Hover over the graph for a more detailed breakdown</p>
        <Chart chartData={this.state.ethToBtc} title='ETH to BTC' coin='ETH' />
        <Chart chartData={this.state.ltcToBtc} title='LTC to BTC' coin='LTC' />
        <Chart chartData={this.state.dshToBtc} title='DSH to BTC' coin='DSH' />
      </div>
    )
  }
})

export default Trends
