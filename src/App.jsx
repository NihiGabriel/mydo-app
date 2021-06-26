import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/helpers/MainLoader';

const Home = React.lazy(() => import ('./components/pages/Home'));
const Notfound = React.lazy(() => import ('./components/pages/404'));
const Login = React.lazy(() => import ('./components/pages/auth/Login'));


const App = () => {

    return (
        <Router>

            <Suspense fallback={MainLoader()}>

                <Switch>

                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/login" component={Login} />
                    <Route exact path = "*" component={Notfound} />
                    

                </Switch>

            </Suspense>

        </Router>
    )

}


export default App;