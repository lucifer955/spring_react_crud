import {Route,Switch} from 'react-router-dom';
import FooterComponent from './components/common/FooterComponent';
import HeaderComponent from './components/common/HeaderComponent';
import CreateCampgroundComponent from './components/CreateCampgroundComponent';
import ListCampgroundComponent from './components/ListCampgroundComponent';
import ViewCampgroundComponent from './components/ViewCampgroundComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <div className="container">
            <Switch>
                <Route path="/" exact component={ListCampgroundComponent}/>
                <Route path="/campgrounds" component={ListCampgroundComponent}/>
                <Route path="/add-campgrounds/:id" component={CreateCampgroundComponent}/>
                <Route path="/view-campgrounds/:id" component={ViewCampgroundComponent}/>
            </Switch>
        </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
