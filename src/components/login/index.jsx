import { useState } from "react";
import Cookies from 'js-cookie';
import Jobs from "../jobs";
import "./index.css";

const Login = () => {

  const [allValues,setValues] = useState({
    username : "",
    password : "",
    showErrorMsg : false,
    errorMsg : ""
  })
    
    const onSubmitUserDetails = async (e) =>{
        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: allValues.username,
            password: allValues.password
            
          }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

        const response = await fetch( api , options)

        const fetchData = await response.json();

        console.log(fetchData);

        if(response.ok===true){

        setValues({...allValues,showErrorMsg : false,errorMsg : ""});

        Cookies.set("jwtToken", fetchData.jwt_token);

        }
        else{

          setValues({...allValues,showErrorMsg : true, errorMsg : fetchData.error_msg});

        }

    }

    const onChangeUsername = (e)=>{

      setValues({...allValues, username : e.target.value})

    }

    const onChangePassword = (e)=>{

      setValues({...allValues, password : e.target.value})

    }



  return (
    <div className="my-form-cont">
      <form className="w-25 my-form" onSubmit={onSubmitUserDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
          onChange={onChangeUsername}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
          onChange={onChangePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br /> <br />

        {allValues.showErrorMsg ? <p className="text-danger"> *{allValues.errorMsg} </p> : null}

      </form>
    </div>
  );
};

export default Login;
