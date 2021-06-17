import {LandingPage} from "./Pages/LandingPage";
import {HomePage} from "./Pages/HomePage";
import {PlaylistPage} from "./Pages/PlaylistPage";

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
                    <LandingPage></LandingPage>
                </Route>

                <Route exact path="/home">
                    <HomePage></HomePage>
                </Route>

                <Route exact path="/playlist">
                    <PlaylistPage></PlaylistPage>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
