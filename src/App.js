import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Router from '../src/routes';
import {store} from './store/Configuration/store';
import {Provider} from 'react-redux';

import {ToastContainer} from 'react-toastify';

import './global.css';

function App() {
    return (
        <Provider store={store}>
            <ToastContainer style={{fontSize:'12pt'}}/>
            <Router/>
        </Provider>
    );
}

export default App;
