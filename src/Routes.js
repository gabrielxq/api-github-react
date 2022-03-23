import React from 'react';
import Home from './pages/home';
import UserInfo from './pages/userInfo';
import Repos from './pages/repos';
import Favoritos from './pages/starred';
import Seguidores from './pages/followers';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/userInfo" component={ UserInfo } />
            <Route path="/repos" component={ Repos } />
            <Route path="/starred" component={ Favoritos } />
            <Route path="/followers" component={ Seguidores } />
        </Switch>
    </BRouter>
)

export default Routes;