import React from 'react';
import PropTypes from 'prop-types'
import actionFor from './actionCreators'

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
    addAnecdote = (event) => {
        event.preventDefault()
        this.context.store.dispatch(
            actionFor.anecdoteCreation(event.target.anecdote.value)
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

/*
    render(){
        return(
            <div>
                <h2>Anecdotes</h2>
                <ul>
                    {this.props.store.getState().map(anecdote =>
                        <Anecdote
                            key={anecdote.id}
                            anecdote={anecdote}
                            handleClick={this.toggleVote(anecdote)}
                        />    
                    )}
                </ul>
            </div>
        )
    }
*/
/*
<ul>
                    {this.props.store.getState().map(anecdote =>
                        <Anecdote
                            key={anecdote.id}
                            anecdote={anecdote}
                            handleClick={this.toggleVote(anecdote)}
                        />    
                    )}
                </ul>
*/

/*
    sortByVote = (store) => () =>{
        console.log('sortByVote: ',store)
        return(
            <div>
            store.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={this.toggleVote(anecdote)}
                />    
            )
            </div>
        )
    }
*/