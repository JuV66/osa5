import React from 'react';
import AnecdoteList from './components/anecdoteList'
import AnecdoteForm from './components/anecdoteForm'
import Notification from './components/notification'
import Filter from './components/filter'

class App extends React.Component {


  render() {
    return (
      <div>
        <Notification/>
        <AnecdoteList/>
        <AnecdoteForm/>
      </div>
    )
  }
}

export default App