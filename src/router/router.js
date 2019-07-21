import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../header';
import Elements from '../components/Elements';
import Console from '../components/Console';
import Sources from '../components/Sources';
import Network from '../components/Network';

class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Redirect path='/' to={process.env.PUBLIC_URL + '/elements'} />
                    <Route path={process.env.PUBLIC_URL + '/elements'} component={Elements} />
                    <Route path={process.env.PUBLIC_URL + '/console'} component={Console} />
                    <Route path={process.env.PUBLIC_URL + '/sources'} component={Sources} />
                    <Route path={process.env.PUBLIC_URL + '/network'} component={Network} />
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
