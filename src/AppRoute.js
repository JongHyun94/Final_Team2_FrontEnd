import { Redirect, Route, Switch } from "react-router-dom";
import Patient from "views/Patient";
import Register from "views/Register";
import Treatment from "views/Treatment";
import Inspection from "views/Inspection";
import Login from "Login";

function AppRoute() {
    return(
        <Switch>
            {/* <Route path="/" exact component={Login}/> */}
            <Route path="/Patient" component={Patient}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Treatment" component={Treatment}/>
            <Route path="/Inspection" component={Inspection}/>
            <Redirect to="/Register"/>
        </Switch>
    );
}
export default AppRoute;