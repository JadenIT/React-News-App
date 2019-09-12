import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import HotNews from './reducers/HotNews'
import QueryNews from './reducers/QueryNews'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    HotNews: HotNews,
    QueryNews: QueryNews
})

const enhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = createStore(reducers, enhancer)

export default store