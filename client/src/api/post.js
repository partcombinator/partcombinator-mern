import { BASE_PATH_SERVER } from "../utils/constants";
import { authFetch } from "../utils/fetch";
import { size } from "lodash";


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
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }