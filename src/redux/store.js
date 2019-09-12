import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import HotNews from './reducers/HotNews'
import QueryNews from './reducers/QueryNews'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    HotNews: HotNews,
    QueryNews: QueryNews
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store