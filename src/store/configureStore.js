import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'
import {initLoad} from '../reducers/initialState';
// import thunk from 'redux-thunk';

export default function configureStore() {

    
    return createStore(
        rootReducer,
        initLoad(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // applyMiddleware()
    );
}
