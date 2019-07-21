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
                    <Redirect exact path='/' to='/elements' />
                    <Route path='/elements' component={Elements} />
                    <Route path='/console' component={Console} />
                    <Route path='/sources' component={Sources} />
                    <Route path='/network' component={Network} />
                </Switch>
            </div>
        );
    }
}

export default ReactRouter;
