import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import reducer from './reducers/indexReducer';
import { Provider } from 'react-redux';
import './index.css'

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)