import {configureStore} from 'react-redux';
import { useReducer } from './features/user';
export const store = configureStore({
    reducer : {
      user: useReducer,

    }
})