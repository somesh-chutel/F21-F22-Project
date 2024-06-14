import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";



const ProtectedRoute = (props)=>{

    const {Component} = props;

    const token = Cookies.get("jwtToken");

    const navigate = useNavigate();

    console.log(token);

    useEffect(()=>{

        if( token === undefined ){
  
          navigate("/login");
  
        }
  
  
      },[])

    return(

        <>

                <Component/>
        
        </>

    )
}


export default ProtectedRoute;