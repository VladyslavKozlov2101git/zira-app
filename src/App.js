import './App.css';
import Header from './components/Header/Header';
import {Route, Switch} from 'react-router-dom'
import MyIssues from './pages/MyIssues/MyIssues';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path = '/projects' component={Projects}/>
        <Route path = '/issues' component={MyIssues}/>
        <Route path = '/home' component={Home}/>
        <Route path = '/registration' component={Registration}/>
      </Switch>
    </div>
    
  );
}

export default App;
