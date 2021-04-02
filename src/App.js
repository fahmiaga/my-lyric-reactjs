import Home from "./pages/Home";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Song from "./pages/Song";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-all">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/song/:id" component={Song} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
