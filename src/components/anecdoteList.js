import React from 'react'
//import actionFor from '../actionCreators'
import Anecdote from './anecdote'
import PropTypes from 'prop-types'
import {voteToggling} from '../reducers/reducer'

class AnecdoteList extends React.Component {

    componentDidMount() {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    toggleVote = (anecdote) => () => {
       // console.log('toggleVote: ',anecdote)
        this.context.store.dispatch(
            voteToggling(anecdote)
        )
    }

    render(){
        
        const anecdotesToShow = () => {
            //console.log('anecdotesToShow/filter: ', this.context.store.getState().filter )
            
            const {anecdotes} = this.context.store.getState()
            //console.log('anecdotesToShow/anecdotes: ',anecdotes)
            const visibleAnecdotes = 
                anecdotes.filter(a => a.content.toUpperCase().includes(this.context.store.getState().filter.toUpperCase() ))
            //console.log('anecdotesToShow/visibleAnecdotes: ',visibleAnecdotes)
            return visibleAnecdotes
        }

        return(
            <div>
                <h2>Anecdotes</h2>
                <ul>
                    {anecdotesToShow()
                        .sort((a,b) => a.votes < b.votes)
                        .map(anecdote =>
                            <Anecdote
                                key={anecdote.id}
                                anecdote={anecdote}
                                handleClick={this.toggleVote(anecdote)}
                            />    
                        )
                    }
                </ul>
            </div>
        )
    }
}

AnecdoteList.contextTypes = {
    store: PropTypes.object
  }

export default AnecdoteList

