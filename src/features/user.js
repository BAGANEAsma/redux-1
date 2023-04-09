import {createSlice} from '@redux-js/toolkit'
import Login from '../Login'

export const userSlice =createSlice({

    name :"user",
    initialState: {value : {email  :"",nom:"",prenom:"", adress:""}},
    reducers :{
        Login : (state, action) => {
            state.value = action.payload;
        },
        Login : (state) => {
            state.value ={email  :"",nom:"",prenom:"", adress:""} ;
    }
}
})
export const {login , logout} = userSlice.reducer;

export  default userSlice.reducer;