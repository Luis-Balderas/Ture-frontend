import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from './Home.jsx';
import NotFound from '../components/NotFound.jsx'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route component = {NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;