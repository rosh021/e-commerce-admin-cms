import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";

const apiProcessor = async (method, url, data1) => {
  try {
    const response = await axios({
      method,
      url,
      data1,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = (obj) => {
  apiProcessor("post", loginRegisterEP, obj);
};
