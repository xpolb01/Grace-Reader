import axios from 'axios';

/*********************************CONSTS******************************/

// USERS
export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const FETCH_SINGLE_ORDER = 'FETCH_SINGLE_ORDER';

// ADMINS
export const FETCH_ALL_ORDERS_ADMIN = 'FETCH_ALL_ORDERS_ADMIN';
export const FETCH_SINGLE_ORDER_ADMIN = 'FETCH_ALL_ORDER_ADMIN';


/****************************ACTION CREATORS****************************/

// USERS ======================

export function getAllOrders(orders) {
  return {
    type: FETCH_ALL_ORDERS,
    orders
  }
}

export function getSingleOrder(order) {
  return {
    type: FETCH_SINGLE_ORDER,
    order
  }
}

// ADMIN ===============================

export function getSingleOrderAdmin(order) {
  return {
    type: FETCH_SINGLE_ORDER_ADMIN,
    order
  }
}

export function getAllOrdersAdmin(orders) {
  return {
    type: FETCH_ALL_ORDERS_ADMIN,
    orders
  }
}

/*************************THUNKS*********************************/

// USERS =======================================

// Get All orders for User
export function fetchAllOrders() {
  return function (dispatch, getState) {
    const userId = getState().auth.id

    axios.get(`/api/orders/${userId}`)
      .then(res => res.data)
      .then(foundOrders => {
        dispatch(getAllOrders(foundOrders))
      })
      .catch(console.error)
    }
}

// Get One Order for User
export function fetchSingleOrder(id) {
  return function (dispatch, getState) {
    const userId = getState().auth.id

    axios.get(`/api/orders/${userId}/${id}`)
      .then(res => res.data)
      .then(foundOrder => {
        dispatch(getSingleOrder(foundOrder))
      })
      .catch(console.error)
    }
}

// ADMINS ============================================

// Get All orders for Admin

export function fetchAllOrdersForAdmin() {
  return function (dispatch, getState) {
    axios.get('/api/orders/')
      .then(res => res.data)
      .then(foundOrders => {
        dispatch(getAllOrdersAdmin(foundOrders))
      })
      .catch(console.error)
    }
}

// Get ONE orders for Admin

export function fetchSingleOrderForAdmin(orderId) {
  return function (dispatch, getState) {
    axios.get(`/api/orders/${orderId}`)
      .then(res => res.data)
      .then(foundOrder => {
        dispatch(getSingleOrderAdmin(foundOrder))
      })
      .catch(console.error)
    }
}
