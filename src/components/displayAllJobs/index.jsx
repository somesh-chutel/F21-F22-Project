import './index.css'


const DisplayAllJobs = (props)=>{

    const {jobsItem} = props;


    return(

        <li className='job-card'>
                <h1> {jobsItem.title} </h1>
        
        </li>

    )
}




export default DisplayAllJobs;