import React from 'react'
import {
  BrowserRouter as Router,
  Switch,  
  Route,  
} from "react-router-dom";
import Formulario from './Formulario';
import Resultados from './Resultados';

const App = () => {
  return (
    <Router>         
      <Switch>
        <Route path="/" exact>
          <Formulario/>
        </Route>
        <Route path="/resultados" exact>
          <Resultados/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
