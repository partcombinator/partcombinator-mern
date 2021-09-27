import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";
import I18n from "./I18n";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser, UserData } from "../../_actions/userActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

export default function TopBar() {
    const dispatch = useDispatch();
    const _logoutUser = () => dispatch(logoutUser());
    const user = useSelector((state) => state.users.user);
    const { t } = useTranslation();
    const history = useHistory();
    const closeSession =  () => {
      _logoutUser();
      history.push('/signin');
    }
    const token = useSelector((state) => state.users.token);
    const tokenDecode  = jwtDecode(token);
    const id = tokenDecode.id
    
    useEffect(() => {
      if (id) {
        dispatch(UserData(id));
      }
    }, [])

  

    

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <I18n/>
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  

                  

                  <div className="topbar-divider d-none d-sm-block"></div>
    
                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        { user && ( user.name +" "+ user.lastname )  }
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src="/admin/img/undraw_profile.svg"
                        alt="..."
                      />
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <Link className="dropdown-item" to="/admin/profile">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        {t("Profile")}
                      </Link>
                      
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        onClick={() => closeSession()}
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        {t("Logout")}
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
    )
}
