import {createStore} from "redux";
import rootReducer from "../reducers/index.tsx";

const store = createStore(rootReducer);

export default store;
