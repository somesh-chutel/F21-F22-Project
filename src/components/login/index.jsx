import Jobs from "../jobs";
import "./index.css";

const Login = () => {
    
    const onSubmitUserDetails = async (e) =>{
        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: "rahu",
            password: "rahul@2021"
            
          }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

        const response = await fetch( api , options)

        const fetchData = await response.json();

        console.log(fetchData);

    }



  return (
    <div className="my-form-cont">
      <form className="w-25 my-form" onSubmit={onSubmitUserDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
