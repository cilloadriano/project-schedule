import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/home/home';
import Person from "./pages/registration/registrationPerson";
import Schedule from "./pages/registration/registrationSchedule";
import ViewPerson from "./pages/view/viewPerson";
import ViewSchedule from './pages/view/viewSchedule';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/person/view' exact component={ViewPerson} />
            <Route path='/person' exact component={Person} />
            <Route path='/person/:id' exact component={Person} />
            <Route path='/schedule/view' exact component={ViewSchedule} />
            <Route path='/schedule' exact component={Schedule} />
            <Route path='/schedule/:id' exact component={Schedule} />
        </Switch>
    ) 
}

export default Routes;