import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {filterChange} from '../reducers/FilterReducer'

class Filter extends React.Component {
/*
    componentDidMount() {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
*/
    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      //console.log('filter: ',this.context.store.getState().filter)
      console.log('filter: ',this.props.filter)
      console.log('event: ', event.target.value)
      event.preventDefault()
        /*
        this.context.store.dispatch(
            filterChange(event.target.value)
        )*/
        this.props.filterChange(event.target.value)
        //event.target.filter.value = ''
        //console.log('filter2: ',this.context.store.getState().filter)
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input name="filter" onChange={this.handleChange}/>
        </div>
      )
    }
  }
  
  //Filter.contextTypes = {
  //  store: PropTypes.object
  //}
  //export default Filter
  const mapStateToProps = (state) => {
    return {
      filter: state.filter
    }
  }

  export default connect(
    mapStateToProps,
    {filterChange}
  )(Filter)