import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from './front/pages/HomePage';
import SignInPage from './admin/pages/SignInPage';
import SignUpPage from './admin/pages/SignUpPage';
import AdminPage from './admin/pages/AdminPage';
import Page404 from './other/Page404';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
             {/* Front Routers */}
            <Route exact path="/" component={HomePage} />
             
             {/* Admin Routers */}
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/admin/" component={AdminPage} />

             {/* Others */}
             <Route component={Page404} />
          </Switch>  
       </Router>
       <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
    </div>
  );
}

export default App;
