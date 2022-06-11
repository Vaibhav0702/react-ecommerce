import axios from "axios";
import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  EMPTY_CART_FAILURE,
  EMPTY_CART_REQUEST,
  EMPTY_CART_SUCCESS,
  FETCH_CART_FAILURE,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_CART_FAILURE,
  REMOVE_PRODUCT_CART_REQUEST,
  REMOVE_PRODUCT_CART_SUCCESS,
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

// ----------------Add to cart

const addProductCartRequest = (payload) => {
  return {
    type: ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};

const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());

  axios
    .post("/cart", product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err.data)));
};

// ------------------------get Cart data --------------------

const fetchCartRequest = (payload) => {
  return {
    type: FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: FETCH_CART_FAILURE,
    payload,
  };
};

const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());

  axios
    .get("/cart")
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};

// ----------------------remove product from cart---------

const removeProductCartRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const removeProductCartSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const removeProductCartFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

const deleteProductCart = (id) => (dispatch) => {
  dispatch(removeProductCartRequest());

  axios
    .delete(`/cart/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(removeProductCartSuccess(res.data));
    })
    .then(() => dispatch(fetchCart()))
    .catch((err) => dispatch(removeProductCartFailure(err.data)));
};

// ---------------add orders

const addOrderRequest = (payload) => {
  return {
    type: ADD_ORDER_REQUEST,
    payload,
  };
};

const addOrderSuccess = (payload) => {
  return {
    type: ADD_ORDER_SUCCESS,
    payload,
  };
};

const addOrderFailure = (payload) => {
  return {
    type: ADD_ORDER_FAILURE,
    payload,
  };
};

const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());

  const orderPayload = [];

  for (let product of payload) {
    product && orderPayload.push(axios.post("/orders", product)); // we cant directly add all orders thats whats why we add one by one
  }

  Promise.all(orderPayload)
    .then((res) => dispatch(addOrderSuccess()))
    .then(() => dispatch(emptyCart(payload)))   // it makes cart empty after add order
    .catch((err) => dispatch(addOrderFailure())); // resolve all promises of orderPayload
};

// ----------------------after order make  empty cart

const emptyCartRequest = (payload) => {
  return {
    type: EMPTY_CART_REQUEST,
    payload,
  };
};

const emptyCartSuccess = (payload) => {
  return {
    type: EMPTY_CART_SUCCESS,
    payload,
  };
};

const emptyCartFailure = (payload) => {
  return {
    type: EMPTY_CART_FAILURE,
    payload,
  };
};

const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());

  const deleteOrder = [];

  for (let obj of payload) {
    let temp = dispatch(deleteProductCart(obj.id)); // delete product

    deleteOrder.push(temp);
  }

  Promise.all(deleteOrder)
    .then((res) => dispatch(emptyCartSuccess()))
    .catch((err) => dispatch(emptyCartFailure()));
};

export {
  fetchData,
  getSingleProduct,
  addProductCart,
  fetchCart,
  deleteProductCart,
  addOrder,
  emptyCart,
};
