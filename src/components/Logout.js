import React from 'react'
import { useNavigate } from "react-router-dom";
import Namenav from './Namenav';


export const Logout = () => {
    const nav = useNavigate();
    nav("/");
  return (
    <div>
        <Namenav />
    </div>
  )
}
