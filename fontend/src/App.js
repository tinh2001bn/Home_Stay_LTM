import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
 import HomeScreen from './screens/HomeScreen';
 import CartScreen from './screens/CartScreen';
 import Rooms from './screens/Rooms';
 // components
  // import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
     {/* <Navbar click ={() => setSideToggle(true)}/> */}
      {/**slideDrawer */}
      {/**Back drop */}
      <main className="app">
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
 
    </Router>
  );
}

export default App;


