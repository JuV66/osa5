import React from 'react';
import { connect } from 'react-redux'

import {anecdoteCreation} from '../reducers/reducer'


class AnecdoteForm extends React.Component {
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
    addAnecdote = (event) => {
        //console.log('store ',this.context.store.getState())
        console.log('event/anecdote: ', event.target.anocdote)
        event.preventDefault()
        this.props.anecdoteCreation(event.target.anecdote.value)
        /*
        this.context.store.dispatch(
            anecdoteCreation(event.target.anecdote.value)
        )*/
        event.target.anecdote.value = ''
    }
    render(){
        return(
            <div>
            <h2>New Anecdote</h2>
            <form onSubmit={this.addAnecdote}>
                <input name="anecdote" />
                <button>create</button> 
            </form>
            </div>
        )
    }
}
/*
AnecdoteForm.contextTypes = {
    store: PropTypes.object
  }
*/


  const mapStateToProps = (state) => {
    return null
  }
  /*
  const mapDispatchToProps = (dispatch) => {
    return {
        anecdoteCreation: (value) => {
        dispatch(addAnecdote(value))
      }
    }
  }
*/
export default connect(
    mapStateToProps,
    {anecdoteCreation}
)(AnecdoteForm)