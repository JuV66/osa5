const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
    //console.log('state now: ',state)
    //console.log('action', action)
    //console.log('aR_ACTION: ', action)
  
    switch(action.type){
      case 'NEW_ANECDOTE':
        return [...state,action.data]
      case 'TOGGLE_VOTE':
        // voten päivitys
        const id = action.data.anecdote.id
        const votedAnecdote = state.find(a => a.id === id)
        const changedAnecdote = {...votedAnecdote, votes : votedAnecdote.votes+1} 
        return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
  
      default:

    }
  return state
}

export const anecdoteInitialization = (data) => {
  //console.log('aR_INIT')
  //console.log('data: ',data)
  return {
    type: 'INIT_ANECDOTE',
    data : initialState
  }
}

export const voteToggling = (anecdote) => {

  //console.log('actionFor[anecdote]: ',anecdote)
  //console.log('actionFor[anecdote.votes]: ',anecdote.votes)

  return {
      type: 'TOGGLE_VOTE',
      data: {anecdote}
  }
}

export const anecdoteCreation = (anecdote) => {
  //console.log('actionFor/anecdoteCreation: ', anecdote)
  return {
      type: 'NEW_ANECDOTE',
      data : {
        content : anecdote,
        id: getId(),
        votes: 0
      }
  }
}

export default reducer

