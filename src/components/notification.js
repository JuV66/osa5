import React from 'react'
import PropTypes from 'prop-types'
import {noticeR} from '../reducers/NoticeReducer'

class Notification extends React.Component {
  
  componentDidMount() {
    const {store} = this.context

    this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
    )
  }
  componentWillUnmount() {
      this.unsubscribe()
  }

  noticeClear() {
    this.context.store.dispatch(
      noticeR()
    )
    clearTimeout(this.timeOut)
  }

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const noticeToShow = () => {

      if (this.context.store.getState().notice !== "")
      {
        console.log('set timer')
        this.timeOut=setTimeout(() => this.noticeClear(), 5000)
        return this.context.store.getState().notice
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

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification