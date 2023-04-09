import React from 'react';
import {useSelector} from 'react-redux'

function Profile() {
  const state =useSelector((state)=>state.user.value)
  return (
    <div>
      <p>email:{state.email}</p>
      <p>nom:{state.nom}</p>
      <p>prenom:{state.prenom}</p>
      <p>adress:{state.adress}</p>
    </div>
  )
}

export default Profile
