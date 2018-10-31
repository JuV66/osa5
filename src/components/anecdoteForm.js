import React from 'react';
import PropTypes from 'prop-types'
//import actionFor from '../actionCreators'
import {anecdoteCreation} from '../reducers/reducer'
import {noticeR} from '../reducers/NoticeReducer'

class AnecdoteForm extends React.Component {
    
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

    addAnecdote = (event) => {
        console.log('store ',this.context.store.getState())
        console.log('event/anecdote: ', event.target.anocdote)
        event.preventDefault()
        this.context.store.dispatch(
            anecdoteCreation(event.target.anecdote.value)
        )
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

AnecdoteForm.contextTypes = {
    store: PropTypes.object
  }

export default AnecdoteForm