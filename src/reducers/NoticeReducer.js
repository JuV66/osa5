export const noticeR = () => {
    //console.log('toimii')
    return {
        type: 'CLEAR_NOTICE'
    }
}
//Tähän tarvitaan jotain......
const noticeReducer = (state='', action) => {
 
    //console.log('noticeReducer: ',action)
    //console.log('noticeReducer: ',state)

    switch(action.type){
        case 'TOGGLE_VOTE':
            return "You voted'" + action.data.anecdote.content + "'"
        case 'NEW_ANECDOTE':
            return "You new anecdote '"+ action.data.content + "'"
        case 'CLEAR_NOTICE':
            return ''
    default:
        return state
    }

}


export default noticeReducer