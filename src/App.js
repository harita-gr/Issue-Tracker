import {BrowserRouter as Router,Route} from 'react-router-dom'
import React,{lazy,Suspense} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
//import AboutScreen from './screens/AboutScreen';
import IssueListScreen from './screens/IssueListScreen';
import IssueScreen from './screens/IssueScreen'
import AddIssueScreen from './screens/AddIssueScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import EditIssueScreen from './screens/EditIssueScreen'
import ReportScreen from './screens/ReportScreen'

const AboutScreen = lazy(() => import ('./screens/AboutScreen'))

function App() {
  return (
    <Suspense fallback = {<div>Loading..</div>}>
    <Router>
    <div className="App">
      <Header/>
      <main>
        
       
       <Route path='/about' component={AboutScreen}  />
       <Route path='/issue/:id' component={IssueScreen} exact/>
       <Route path='/issues' component={IssueListScreen} exact />
       <Route path='/addIssue' component={AddIssueScreen} exact />    
       <Route path='/editIssue/:id' component={EditIssueScreen} exact /> 
       <Route path='/signin' component={LoginScreen}  />
       <Route path='/register' component={RegisterScreen}  />
       <Route path='/reports' component={ReportScreen}  />
       <Route path='/' component={HomeScreen} exact />

      </main>
      <Footer/>
    </div>
    </Router>
    </Suspense>
  );
}

export default App;
