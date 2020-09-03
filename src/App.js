import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Ladingpage from './components/Landingpage'
function App() {
  return (
    <>
    <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Ladingpage}/>
   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
