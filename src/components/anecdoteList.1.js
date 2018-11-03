import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './anecdote'
import {voteToggling} from '../reducers/reducer'
//import Filter from './filter'

//class AnecdoteList extends React.Component {
const AnecdoteList = (props) => {
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
    toggleVote = (anecdote) => () => {
       // console.log('toggleVote: ',anecdote)
       this.props.voteToggling(anecdote)
       /*
        this.context.store.dispatch(
            voteToggling(anecdote)
        )*/
    }

    render(){
        /*
        const anecdotesToShow = () => {
                        
            //const {anecdotes} = this.context.store.getState()
            const {anecdotes} = this.props
            //console.log('anecdotesToShow/anecdotes: ',anecdotes)
            const visibleAnecdotes = 
                //anecdotes.filter(a => a.content.toUpperCase().includes(this.context.store.getState().filter.toUpperCase() ))
                anecdotes.filter(a => a.content.toUpperCase().includes(this.props.filter.toUpperCase() ))
            //console.log('anecdotesToShow/visibleAnecdotes: ',visibleAnecdotes)
            return visibleAnecdotes
        }
        */
        return(
            <div>
                <h2>Anecdotes</h2>
                <Filter/>
                <ul>
                    {props.visibleanecdotes
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

const anecdotesToShow = (anecdotes,filter) => {
                        
    //const {anecdotes} = this.context.store.getState()
    //const {anecdotes} = this.props
    //console.log('anecdotesToShow/anecdotes: ',anecdotes)
    const visibleAnecdotes = 
        //anecdotes.filter(a => a.content.toUpperCase().includes(this.context.store.getState().filter.toUpperCase() ))
        anecdotes.filter(a => a.content.toUpperCase().includes(filter.toUpperCase() ))
    //console.log('anecdotesToShow/visibleAnecdotes: ',visibleAnecdotes)
    return visibleAnecdotes
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
        //anecdotes: state.anecdotes,
        //filter: state.filter
    }
}

export default connect(
    mapStateToProps,
    {voteToggling}
)(AnecdoteList)

