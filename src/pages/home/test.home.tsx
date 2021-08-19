import React from 'react'
import { connect } from 'react-redux'

let render = 0

const TestComp = ({ text }: any) => {
  console.log(++render)
  return <div>{text}</div>
}

const mapStateToProps = (state: any) => ({
  text: state.test.test,
})

export default connect(mapStateToProps)(TestComp)
