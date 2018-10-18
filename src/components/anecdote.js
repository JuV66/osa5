import React from 'react';

const Anecdote = ({anecdote,handleClick}) => {
    //console.log('Anecdote: ',anecdote)
    return( 
        <div>
            <div>
            {anecdote.content} 
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}
export default Anecdote