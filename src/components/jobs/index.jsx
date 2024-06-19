import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import DisplayAllJobs from "../displayAllJobs";
import FilterSection from "../filterSection";
import "./index.css";

// {
//     "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//     "title": "Devops Engineer",
//     "rating": 4,
//     "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//     "location": "Delhi",
//     "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//     "employment_type": "Internship",
//     "package_per_annum": "10 LPA"
//   }

const Jobs = () => {
  const token = Cookies.get("jwtToken");

  const [allValues, setValues] = useState({
    jobsList: [],
    empType: [],
    sllryRange: "",
    searchInput: "",
  });

  useEffect(() => {
    const fetchJobsData = async () => {

      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.sllryRange}&search=${allValues.searchInput}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);

      const fetchData = await response.json();

      if (response.ok === true) {
        setValues({ ...allValues, jobsList: fetchData.jobs });
      }
    };

    fetchJobsData();
  }, [allValues.searchInput,allValues.empType]);

  const onChangeUserIn = (e) => {

    if(e.key === "Enter"){

        setValues({ ...allValues, searchInput: e.target.value });
    }
    
  };


  const onChangeempType = (value,isCheked)=>{

    if(isCheked){

      setValues({ ...allValues, empType: [...allValues.empType,value] });

    }
    else{

      setValues({...allValues,empType : allValues.empType.filter(each => each !== value)});

    }

    


  }

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="filter-alljobs-container">
        <div className="filter-section-cont">
          <FilterSection empTypeChangeFunct = {onChangeempType}/>
        </div>

        <div className="all-jobs-cont">
          <input
            onKeyDown={onChangeUserIn}
            type="search"
            className="form-control w-75 mb-3"
          />

          <ul>
            {allValues.jobsList.map((each) => (
              <DisplayAllJobs key={each.id} jobsItem={each} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
