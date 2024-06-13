import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css'


const Jobs = ()=>{

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

                <h1> Jobs Section </h1>
        
        </>

    )
}



export default Jobs;