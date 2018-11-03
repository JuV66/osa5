import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './anecdote'
import {voteToggling} from '../reducers/reducer'
import Filter from './filter'

//class AnecdoteList extends React.Component {
const AnecdoteList = (props) => (


    <div>
        <h2>Anecdotes</h2>
        <Filter/>
        <ul>
            {props.visibleAnecdote
                .sort((a,b) => a.votes < b.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() => props.voteToggling(anecdote)}
                    />    
                )
            }
        </ul>
    </div>
)

const anecdotesToShow = (anecdotes,filter) => {
                        
    //const {anecdotes} = this.context.store.getState()
    //const {anecdotes} = this.props
    console.log('anecdotesToShow/anecdotes: ',anecdotes)
    const visibleAnecdotes = 
        //anecdotes.filter(a => a.content.toUpperCase().includes(this.context.store.getState().filter.toUpperCase() ))
        anecdotes.filter(a => a.content.toUpperCase().includes(filter.toUpperCase() ))
    console.log('anecdotesToShow/visibleAnecdotes: ',visibleAnecdotes)
    return visibleAnecdotes
}

const mapStateToProps = (state) => {

    const  visibleAnecdotes = anecdotesToShow(state.anecdotes, state.filter)
    console.log ('visibleAnecdotes: ',visibleAnecdotes)
    return {visibleAnecdote : visibleAnecdotes}
    //{
        //visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
        //anecdotes: state.anecdotes,
        //filter: state.filter
    //}
}

export default connect(
    mapStateToProps,
    {voteToggling}
)(AnecdoteList)

