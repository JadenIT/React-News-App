import React from 'react'
import ReactDOM from 'react-dom'
import HotNews from './components/HotNews'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import style from './static/css/index.module.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import Header from './components/Header'
import QueryNews from './components/QueryNews'

const render = (store) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/hot' render={() => <HotNews />} />
                    <Route exact path='/q/:id' render={(props) => <QueryNews parameters={props.match.params} />} />
                    <Route render={() => <Redirect to='/hot' />} />
                </Switch>
            </BrowserRouter>
        </Provider>, document.getElementById('root'))
}

render(store)

store.subscribe(() => {
    render(store)
})


