import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Navigation} from './Navigation';
import {ContactForm} from './ContactForm';
import {Movie} from './Movie';
import {Ticket} from './Ticket';
import {Events} from './Events';
import PrivateRoute from './Utils/PrivateRoute';
import ProtectedRoute from './Utils/ProtectedRoute';
import PublicRoute from './Utils/PublicRoute';
import Login from './pages/login/Login';
// import Register from './pages/register/Register';
import Register from './Register';


import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { MovieCategories } from './MovieCategories';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
      Online Cinema
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/ContactForm' component={ContactForm}/>
       <Route path='/Movie' component={Movie}/>
       <Route path='/MovieCategories' component={MovieCategories}/>
       <Route path='/Ticket' component={Ticket}/>
       <Route path='/events' component={Events}/>
       <Route path='/Register' component={Register}/>
       {/* <PublicRoute exact path="/login" name="Login Page" component={Login} />
              <PublicRoute exact path="/register" name="Register Page" component={Register} /> */}

     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;