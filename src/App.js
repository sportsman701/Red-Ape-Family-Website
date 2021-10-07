//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import HomePage from 'pages/home';
import TeamPage from 'pages/team';
import FaqPage from 'pages/faq';
import 'scss/main.scss';

import {initWeb3} from './web3';
initWeb3();


const App = () => {
    return (
        <Router>

            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>

                <Route exact path="/home">
                    <HomePage/>
                </Route>

                <Route exact path="/team">
                    <TeamPage/>
                </Route>

                <Route exact path="/faq">
                    <FaqPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
