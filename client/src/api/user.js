import { BASE_PATH_SERVER } from "../utils/constants";
import { authFetch } from "../utils/fetch";

export async function loginApi(formData) {
    try {
      const url = `${BASE_PATH_SERVER}/api/user/login`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }



  export async function registerApi(formData) {
    const { email } = formData
    formData.username = email.substring(0, email.indexOf("@"));
    try {
      const url = `${BASE_PATH_SERVER}/api/user/singup`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await authFetch(url, params);
      console.log("result:", result)
      const result = await response.json();
      return result;
    } catch (error) {
        console.log(error);
        }
  } 


  export async function getData(id) {
    try {
    const url = `${BASE_PATH_SERVER}/api/user/${id}`;
        const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        };
        const response = await authFetch(url, params);
        const result = await response.user
        return result;
      } catch (error) {
        console.log(error);
        return null;
      }
  
  }
  