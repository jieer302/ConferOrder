
import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ConferenceApp from './containers/conference/ConferenceApp.jsx'
import modalReducer from './reducers/conference/modalVisible.jsx'
import './style/conference.css';

const store = createStore(modalReducer);

ReactDom.render(
    <Provider store={store}>
        <ConferenceApp />
    </Provider>,
    document.getElementById('content')
);

