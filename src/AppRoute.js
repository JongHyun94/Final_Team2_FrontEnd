import { Redirect, Route, Switch } from "react-router-dom";
import Patient from "views/Patient";
import Register from "views/Register";
import Treatment from "views/Treatment";
import Inspection from "views/Inspection";
import Login from "views/Login";
import DataAnalysis from "views/DataAnalysis";
import User from "views/User";
import Page404 from "views/errors/page404";
import NurseRoute from "components/common/CustomeRoute/NurseRoute";
import DoctorRoute from "components/common/CustomeRoute/DoctorRoute";
import InspectorRoute from "components/common/CustomeRoute/InspectorRoute";
import MasterRoute from "components/common/CustomeRoute/MasterRoute";
import { useSelector } from "react-redux";

function AppRoute() {
    const Uauthority = useSelector((state) => state.authReducer.uauthority);
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            {/* <Route path="/Patient" component={Patient} /> */}
            <NurseRoute
                path="/Patient"
                component={Patient}
                role={Uauthority}
            />
            {/* <Route path="/Register" component={Register} /> */}
            <NurseRoute
                path="/Register"
                component={Register}
                role={Uauthority}
            />
            {/* <Route path="/Treatment" component={Treatment}/> */}
            <DoctorRoute
                path="/Treatment"
                component={Treatment}
                role={Uauthority}
            />
            {/* <Route path="/Inspection" component={Inspection}/>    */}
            <InspectorRoute
                path="/Inspection"
                component={Inspection}
                role={Uauthority}
            />
            {/* <Route path="/DataAnalysis" component={DataAnalysis}/>  */}
            <MasterRoute
                path="/DataAnalysis"
                component={DataAnalysis}
                role={Uauthority}
            />
            {/* <Route path="/User" component={User} /> */}
            <MasterRoute
                path="/User"
                component={User}
                role={Uauthority}
            />
            <Route component={Page404} />
            {/* <Redirect to="/Register"/> */}
        </Switch>
    );
}
export default AppRoute;