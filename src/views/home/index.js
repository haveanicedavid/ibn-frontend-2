import React from 'react'
const { array } = React.PropTypes

const Trends = React.createClass({
  propTypes: {
    data: array
  },
  render () {
    return (
      <h1 className='center-align'>Home page</h1>
    )
  }
})

export default Trends
