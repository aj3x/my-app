import { createStore } from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}
let store = createStore(counter,this.props.health.head.total);
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })