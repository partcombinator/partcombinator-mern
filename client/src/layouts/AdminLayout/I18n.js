import React from 'react'

export default function I18n() {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                        ES
                    </a>
                    {/* <!-- Dropdown - Alerts --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Language</h6>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#">Español</a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#">English</a>
                    </div>
                  </li>
    )
}
