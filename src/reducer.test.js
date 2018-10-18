import reducer from './reducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteRenderer', () => {
  it('returns new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'sovelluksen tila talletetaan storeen',
        important: true,
        id: 1
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState.length).toBe(1)
    expect(newState).toContainEqual(action.data)
  })

  it('returns new state with action TOGGLE_VOTE', () => {
    const state = [
      {
        content: 'sovelluksen tila talletetaan storeen',
        votes: 1,
        id: 1
      },
      {
        content: 'tilanmuutokset tehdään actioneilla',
        votes: 2,
        id: 2
      }]

    const action = {
      type: 'TOGGLE_VOTE',
      data: {
        id: 2
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState.length).toBe(2)

    expect(newState).toContainEqual(state[0])

    expect(newState).toContainEqual({
      content: 'tilanmuutokset tehdään actioneilla',
      votes: 2,
      id: 2
    })
  })  
})