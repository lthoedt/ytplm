import LandingView from "./Views/LandingView";
import HomeView from "./Views/HomeView";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingView></LandingView>
                </Route>

                <Route exact path="/home">
                    <HomeView></HomeView>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
