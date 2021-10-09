import React from 'react';
import { Redirect } from "react-router-dom"

function Profile({ authorized }){
  if(!authorized){
    return <Redirect to="" />
  }
  return <h1>This is profile Page</h1>
}
export default Profile;