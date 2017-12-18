import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import Shop from './components/Shop';




// COMP 42F 42G
export default (
    <Switch>
        <Route exact path='/' component={ComponentA} />
        <Route path='/componentB' component={ComponentB} />
        <Route path='/componentC' component={ComponentC} />
        <Route path='/componentD/:id' component={ComponentD} />
        <Route path='/shop' component={Shop} />
    </Switch>
)