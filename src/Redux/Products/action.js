import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionTypes";

// -------------fetchData-------

const fetchDataRequest = (payload) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload,
  };
};

const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .get("/products", {
        params: {
          ...payload,
        },
      })
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };
};

// ----------------------get single product details

const getSingleProductRequest = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());

  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(getSingleProductSuccess(res.data)))
    .catch((err) => dispatch(getSingleProductFailure(err.data)));
};

export { fetchData , getSingleProduct };
