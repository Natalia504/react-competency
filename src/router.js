import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';


// COMP 42F 42G
export default (
    <Switch>
        <Route exact path='/' component={ComponentA} />
        <Route path='/compB' component={ComponentB} />
       
    </Switch>
)