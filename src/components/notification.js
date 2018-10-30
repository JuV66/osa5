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
      //console.log('this.context: ', this.context)
      //console.log('store', store)
      //console.log('notice: ', this.context.store.getState().notice )
      this.timeOut=setTimeout(() => this.noticeClear(), 5000)
      //const notice = this.context.store.getState().notice
      if (this.context.store.getState().notice !== '')
        return this.context.store.getState().notice
      return ''
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
