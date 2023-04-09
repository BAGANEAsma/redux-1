import React from 'react';
import {useDispatch} from 'react-redux'
import {Login ,logout} from './features/user'
function login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button> 
        onClick={()=>
        dispatch(Login({email  :"asma@gmail.com",nom:"Asma",prenom:"Bagane", adress:"Hammem sousse"})
        )}
        se connecter !{" "}
      </button>
      <button> 
        onClick={()=>dispatch(logout())}
        se deconnecter !{" "}
      </button>
    </div>
  )
}

export default Login
