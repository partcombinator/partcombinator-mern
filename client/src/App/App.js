import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactPage from "../front/pages/ContactPage";
import HomePage from "../front/pages/HomePage";
import AboutPage from "../front/pages/AboutPage";
import PostPage from "../front/pages/PostPage";

import SignInPage from "../admin/pages/SignInPage";
import SignUpPage from "../admin/pages/SignUpPage";
import AdminPage from "../admin/pages/AdminPage";
import Posts from "../admin/pages/Posts";
import PostNew from "../admin/pages/Posts/PostNew";
import Post from "../admin/pages/Posts/Post";

import ForgotPassword from "../admin/pages/ForgotPassword";
import Page404 from "../other/Page404";
import Categories from "../admin/pages/Categories";
import RoutePrivate from "../routes/RoutePrivate";

// Redux
import { Provider } from "react-redux";
import store from "../_store";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            {/* Front Routers */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/post" component={PostPage} />

            {/* Auth Routers */}
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/forgot-password" component={ForgotPassword} />

            {/* Admin Routers */}
            <RoutePrivate exact path="/admin/" component={AdminPage} />
            <RoutePrivate exact path="/admin/posts" component={Posts} />
            <RoutePrivate exact path="/admin/post-new" component={PostNew} />
            <RoutePrivate exact path="/admin/post/edit/:id?" component={Post} />
            <RoutePrivate
              exact
              path="/admin/categories"
              component={Categories}
            />

            {/* Others Routers */}
            <Route component={Page404} />
          </Switch>
        </Provider>
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
