/**
 * Created by ace on 07/06/2023.
 */
import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
import {Router,browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';

const store= configureStore();

render(
    <Provider store={store}><Router routes={routes} history={browserHistory}/></Provider>
    ,document.getElementById('root'));
