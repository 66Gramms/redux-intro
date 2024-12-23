import { combineReducers, createStore } from "redux";
import accountReducer from "./features/customers/customerSlice";
import customerReducer from "./features/accounts/accountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
