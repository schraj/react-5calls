import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import About from './areas/main/components/About';
import HypothesisContainer from './areas/main/containers/HypothesisContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HypothesisContainer} />
        <Route path="about" component={About} />
        <Route path="call" component={About} />        
        <Route path="done" component={About} />        
    </Route>
);