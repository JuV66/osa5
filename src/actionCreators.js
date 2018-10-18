
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const actionFor = {

    anecdoteCreation(anecdote) {
        return {
            type: 'NEW_ANEKDOTE',
            data: {
                anecdote,
                id: generateId(),
                votes : 0
            }
        }
    },
    
    voteToggling(anecdote) {

        console.log('actionFor[anecdote]: ',anecdote)
        console.log('actionFor[anecdote.votes]: ',anecdote.votes)

        anecdote.votes=anecdote.votes+1
        return {
            type: 'TOGGLE_VOTE',
            data: {anecdote}
        }
    },

    voteSort(){

    }
}

export default (actionFor)