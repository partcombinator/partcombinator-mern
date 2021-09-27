import { BASE_PATH_SERVER } from "../utils/constants";
import { authFetch } from "../utils/fetch";
import { size } from "lodash";

// READ GET
export async function getAllPost() {
  try {
      const url = `${BASE_PATH_SERVER}/api/post`;
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


// CREATE POST
export async function createPost(formData) {
    try {
        const url = `${BASE_PATH_SERVER}/api/post`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };
        const response = await authFetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

// DELETE POST
export async function deletePost(id) {
  try {
      const url = `${BASE_PATH_SERVER}/api/post/${id}`;
      console.log(url)
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      };
      const response = await authFetch(url, params);
      console.log(response);
      const result = await response.json();
      return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}  


export async function editPost(id, formData) {
  try {
  const url = `${BASE_PATH_SERVER}/api/post/${id}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await authFetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }

}  