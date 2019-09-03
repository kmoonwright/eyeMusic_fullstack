import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <h1>VVELC0ME</h1>
        <ul>
            <li>DIS IS</li>
            <li>APP APP</li>
        </ul>
    </div>
);

export default App;