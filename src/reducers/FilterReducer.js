const filterReducer = (state = '', action) => {
    console.log('fR_ACTION: ', action)
    switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
    }
  }
  
  export const filterChange = (filter) => {
    return {
      type: 'SET_FILTER',
      filter
    }
  }

  export const filterCreation = (filter) => {
    //console.log('actionFor/anecdoteCreation: ', anecdote)
    return {
        type: 'NEW_FILTER',
        data : {
          content : filter
        }
    }
  }

  
  export default filterReducer