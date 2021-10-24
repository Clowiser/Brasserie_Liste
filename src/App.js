import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import './styles/_settings.css';

function App() {
  return (
      <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Home}/>
          </Switch>
      </BrowserRouter>
  );
};
// revoir l'explication de ce code

export default App;