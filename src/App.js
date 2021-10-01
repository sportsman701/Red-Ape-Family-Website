//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import HomePage from 'pages/home';
import 'scss/main.scss';

import {initWeb3} from './web3';
initWeb3();


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>

                <Route exact path="/home">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
