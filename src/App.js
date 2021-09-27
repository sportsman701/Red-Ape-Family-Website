//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import HomePage from 'pages/home';

import 'scss/main.scss';


const App = () => {
    return (
        <Router>
            <Switch>
                
                <Route exact path="/home">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
