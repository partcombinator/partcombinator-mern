import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";

export default function ChangeYourData({user}) 
{

  const name = user ? user.name : ""
  const lastname = user ? user.lastname : ""
  console.log(name)


function initialValuesData() {
    return {
      name:  name ,
      lastname: lastname,
    };
  }

  function validationSchemaData() {
    return {
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
    };
  }

  const formikData = useFormik({
    initialValues: initialValuesData(),
    validationSchema: Yup.object(validationSchemaData()),
    onSubmit: async (formData, { resetForm }) => {
      try {
        console.log(formData);
        // _loginUser(formData);
        // history.push('/admin')
        toast.success("Save");
      } catch (error) {
        toast.error(error);
      }
    },
  });


    return (
        <div className=" card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-secoundary">
                Change Your Data
              </h6>
            </div>
            <div className="card-body">
              <form onSubmit={formikData.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" 
                placeholder="Name"
                name="name"
                onChange={formikData.handleChange}
                value={formikData.values.name}
                required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={formikData.handleChange}
                  value={formikData.values.lastname}
                  required
                />
              </div>

              <button  type="submit"  className="btn btn-secondary btn-block">
                <i className="fab fa-save fa-fw"></i>Change
              </button>
              </form>
            </div>
          </div>
    )
}
