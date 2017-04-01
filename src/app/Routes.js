import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="call" component={CallPage} />        
        <Route path="done" component={CallPage} />        
    </Route>
);