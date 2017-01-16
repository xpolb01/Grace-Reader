import { FETCH_SINGLE_ORDER, FETCH_ALL_ORDERS, FETCH_SINGLE_ORDER_ADMIN, FETCH_ALL_ORDERS_ADMIN } from './order-actions';

const initialState = {
  allOrders: [],
  currentOrder: {}
}

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ORDERS: // USER
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER: // USER
      return Object.assign({}, state, { currentOrder: action.order });
    case FETCH_ALL_ORDERS_ADMIN: // ADMIN
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER_ADMIN: // ADMIN
      return Object.assign({}, state, { currentOrder: action.order });

    default: return state;
  }
}

export default orderReducer;
