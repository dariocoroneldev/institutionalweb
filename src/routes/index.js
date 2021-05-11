import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './../pages/Home';
import Vision from './../pages/Vision';


function Routes() {
  return (<>

    <Switch>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/vision' component={Vision}/> 
    </Switch>
  
  </>);
}

export default Routes;