/* eslint-disable react/prop-types */
import  { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'


const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate()
    //1 LOAD SESSION DATA LOCAL
    const { isLoading, isAuthenticated} = useUser()

    useEffect(() => {
        if(!isAuthenticated && !isLoading) navigate("/advisors")
    },[isAuthenticated,isLoading,navigate])

    if(isLoading) return <Loader />
    //4 USER RENDER APP

    if(isAuthenticated) return children
}

export default ProtectedRoutes