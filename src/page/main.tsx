import { Container } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Container maxWidth="sm">
                    main Page 입니다.
                </Container>
                <nav>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/master">master</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

  export default App;