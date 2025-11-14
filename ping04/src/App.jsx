import { Route, Switch } from "wouter";
import Editor from "./components/Editor"

const App = () => (
  <>
    <Switch>
      <Route path="/">ping04 is cool</Route>
      <Route path="/editor"><Editor/></Route>
      <Route>404 no page here</Route>
    </Switch>
  </>
);

export default App