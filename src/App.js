import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
