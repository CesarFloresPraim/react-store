import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";


const rootReducer = () =>
	combineReducers({
		auth: authReducer,
		cart: cartReducer
	});

export default rootReducer;