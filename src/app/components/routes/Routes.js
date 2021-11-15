
import AlertList from '../alert/AlertList';
import AddUpdateAlert from '../alert/AddUpdateAlert';
import AdminLTE from 'adminlte-2-react';
import MainMenu from "../base/Navigation"
import AddAlert from '../alert/AddAlert';
const sidebar = [
  MainMenu
]

const routing = (
  // <Router>      
  //     <Switch>
  //       <Route exact path="/" component={App} />
  //       <Route exact path="/alert" component={AlertList} />
  //       <Route exact path="/alert/add" component={AddUpdateAlert} />
  //       <Route component={Notfound} />
  //     </Switch>      
  // </Router>
  <AdminLTE title={["Alert", " Scenarios"]} titleShort={["Alert"]} theme="blue" sidebar={sidebar}>
    <AlertList exact path="/alert" />
    <AddUpdateAlert exact path="/alert/add" />
    <AddAlert exact path="/alert/manage" />
  </AdminLTE>
)
export default routing;