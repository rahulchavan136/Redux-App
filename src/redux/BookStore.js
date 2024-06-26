import { createStore } from "redux";
import BookReducer from "./BookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import CardSlice from "./CardSlice";

const Store = createStore(BookReducer,CardSlice, composeWithDevTools());

export default Store;
