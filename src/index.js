import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import anecdoteReducer from './reducers/reducer'
import noticeReducer from './reducers/NoticeReducer'
import filterReducer from './reducers/FilterReducer'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notice: noticeReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(

  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
