import { useContext } from "react"
import {  Navigate } from 'react-router-dom';
import CarritoContext from "./CartContext";


export function ProtectedRoute ({ children }) {

    const { usuario } = useContext(CarritoContext)

    if (!usuario) return <Navigate to='/ingreso'/>

    return <>{children}</>;
}