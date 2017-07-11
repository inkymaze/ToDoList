import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleWare from '../middleware/thunk';
export default ()=>(createStore(rootReducer,applyMiddleware(thunkMiddleWare)));
