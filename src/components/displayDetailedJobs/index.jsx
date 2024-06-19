import { useParams } from 'react-router-dom';
import Header from '../header';
import Cookies from 'js-cookie';
import './index.css'
import { useEffect } from 'react';


const DetailedJobs = ()=>{

    const token = Cookies.get("jwtToken");

    const {id} = useParams();
    useEffect(()=>{

        const fetchDetailsJobs = async()=>{
            const api = `https://apis.ccbp.in/jobs/${id}`;

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            } 

            const response = await fetch(api,options);

            const data = await response.json();

            console.log(data);

        }

        fetchDetailsJobs();

    })

    return(

        <>
        <Header/>
                <h1> {id} </h1>
        </>

    )
}



export default DetailedJobs;