import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import Navbar from './navbar/Navbar';
import './components/FontAwesome'
import Home from './home/Home'
import Footer from "./footer/Footer";
import Not_found_404 from "./not_found/Not_found_404";


function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="main-content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="*">
                    <Not_found_404 />
                </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
