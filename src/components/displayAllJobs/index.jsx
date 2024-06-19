//react icons link : -  https://react-icons.github.io/react-icons/
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaBriefcase } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./index.css";

const DisplayAllJobs = (props) => {
  const { jobsItem } = props;

  console.log(jobsItem.id);

  return (
    <Link to = {`/jobs/${jobsItem.id}`}>
      <li className="jobs-card rounded">
        <div className="web-logo-rating-cont">
          <img
            className="jobs-web-logo"
            src={jobsItem.company_logo_url}
            alt=""
          />

          <div className="rating-cont">
            <h3>{jobsItem.title}</h3>
            <FaStar className="rating-icon" />
            <span>{jobsItem.rating}</span>
          </div>
        </div>

        <div className="location-ppa-cont">
          <div className="location-empt-cont">
            <FaLocationDot className="me-1" />
            <span className="me-3">{jobsItem.location}</span>
            <FaBriefcase className="me-1" />
            <span>{jobsItem.employment_type}</span>
          </div>

          <h5>{jobsItem.package_per_annum}</h5>
        </div>

        <hr />

        <div>
          <h5>Description</h5>

          <p>{jobsItem.job_description}</p>
        </div>
      </li>
    </Link>
  );
};

export default DisplayAllJobs;
