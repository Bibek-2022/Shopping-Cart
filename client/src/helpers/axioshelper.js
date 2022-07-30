import axios from "axios";
const productEP = "http://localhost:8000/api/v1/product";

// General function to handle the request
const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Product

export const getProduct = () => {
  return apiProcessor("get", productEP);
};
