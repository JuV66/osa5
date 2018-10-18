import React from 'react';
import AnecdoteList from './components/anecdoteList'
import AnecdoteForm from './components/anecdoteForm'

class App extends React.Component {

  render() {
    return (
      <div>
        <AnecdoteList/>
        <AnecdoteForm/>
      </div>
    )
  }
}

export default App

/*
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
*/
/*
<AnecdoteForm store={this.props.store}/>
*/