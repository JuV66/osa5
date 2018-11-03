import React from 'react'
import { connect } from 'react-redux'

import {noticeR} from '../reducers/NoticeReducer'

class Notification extends React.Component {

  noticeClear() {
    this.props.noticeR()
    clearTimeout(this.timeOut)
  }
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const noticeToShow = () => {

      if (this.props.notice !== "")
      {
        console.log('set timer: ',this.timeOut)
        if (this.timeOut !== undefined) {
          clearTimeout(this.timeOut)
        }
        this.timeOut=setTimeout(() => this.noticeClear(), 5000)
        return this.props.notice
      }
      return ""
    }

    return (
      <div style={style}>
        {noticeToShow()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notice: state.notice
  }
}

//export default Notification
export default connect(
  mapStateToProps,
  {noticeR}
)(Notification)