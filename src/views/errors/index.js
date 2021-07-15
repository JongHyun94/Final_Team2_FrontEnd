import { Switch, Route } from "react-router-dom";
import page403 from "./page403";
import page404 from "./page404";

function errors(props) {
  return (
    <div>
      <Switch>
        <Route path={`${props.match.url}/`} exact component={page403}/>
        <Route path={`${props.match.url}/`} exact component={page404}/>
      </Switch>
    </div>
  );
}

export default errors;