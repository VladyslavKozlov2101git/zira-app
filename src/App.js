import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import MyIssues from './pages/MyIssues/MyIssues';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';

function App() {
  console.log(!localStorage.token)

 

  return (
    <div className="app">
      <Switch>
        <Route path = '/projects' component={Projects}/>
        <Route path = '/issues' component={MyIssues}/>
        <Route path = '/registration' component={Registration}/>
        <Route path = '/login' component={Login}/>
        <Route path = '/' component={Home}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
    
  );
}

export default App;
