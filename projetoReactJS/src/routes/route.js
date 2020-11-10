import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Add from '../pages/add'
import Home from '../pages/home'
import Update from '../pages/update'
import Delete from '../pages/delete'


const Routes = () => (
    
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/delete" component={Delete}/>
            <Route  path="/add" component={Add}/>
            <Route  path={"/update/:id"} component={Update}/>
        </Switch>
    
)

export default Routes;