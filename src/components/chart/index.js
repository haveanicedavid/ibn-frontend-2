import React from 'react'
import moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
const { shape, string, arrayOf, number } = React.PropTypes

const Chart = React.createClass({
  propTypes: {
    chartData: arrayOf(shape({
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
    })),
    coin: string,
    title: string
  },
  render () {
    const formatDate = (d) => moment(d).format('h:mm a')
    const formatDateVerbose = (d) => moment(d).format('M/D/YY h:mm:ss a')
    const formatTooltip = (rate) => `1 BTC = ${1 / rate} ${this.props.coin}`
    return (
      <div className='center-align'>
        <h3>{this.props.title}</h3>
        <LineChart width={800} height={300} data={this.props.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey='created' tickCount={100} tickFormatter={formatDate} />
          <YAxis domain={['dataMin', 'dataMax']} />
          <CartesianGrid strokeDasharray='1 1' />
          <Tooltip labelFormatter={formatDateVerbose} formatter={formatTooltip} />
          <Legend />
          <Line type='monotone' dataKey='BTC-E' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='Poloniex' stroke='#82ca9d' activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    )
  }
})

export default Chart
