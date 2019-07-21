import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
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
                <Router basename='/'>
                    <Redirect exact path='/' to='./elements' />
                    <Route path='/elements' component={Elements} />
                    <Route path='/console' component={Console} />
                    <Route path='/sources' component={Sources} />
                    <Route path='/network' component={Network} />
                </Router>
            </div>
        );
    }
}

export default ReactRouter;
