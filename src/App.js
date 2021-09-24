import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import ProjectInner from './pages/ProjectInner/ProjectInner'

function App() {
  console.log(!localStorage.token)

 

  return (
    <div className="app">
      <Switch>
        <Route path = '/registration' component={Registration}/>
        <Route path = '/login' render={()=> localStorage.token ? <Redirect to='/' /> : <Login />}/>
        <Route path = '/projects'exact render={()=> !localStorage.token ? <Redirect to='/login' /> : <Projects />}/> 
        <Route path = '/projects/:id/' exact render={()=> !localStorage.token ? <Redirect to='/login' /> : <ProjectInner/>}/>       
        <Route path = '/issues' render={()=> !localStorage.token ? <Redirect to='/login' /> : <Projects />}/>
        <Route path = '/' render={()=> !localStorage.token ? <Redirect to='/login' /> : <Home />}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
    
  );
}

export default App;
