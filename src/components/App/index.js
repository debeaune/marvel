import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'
import '../../App.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={ErrorPage} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
