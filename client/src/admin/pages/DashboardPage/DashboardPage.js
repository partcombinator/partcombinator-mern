import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../../i18n/i18n";

export default function DashboardPage() {
  const { t } = useTranslation();
  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{t("Dashboard")}</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {t("Numbers_of_Post")}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    0
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  {t("Numbers_of_Categories")}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    0
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-6 mb-4">
        <p className="mb-4">{t("Hello User, I am")} 
        <Link target="_blank" to="https://www.partcominator.com"> PartCombinator</Link>{t(". By Marlon Falcón Hernández.")}</p>
        </div> 


      </div>
    </AdminLayout>
  );
}
