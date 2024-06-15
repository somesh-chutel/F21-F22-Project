import './index.css'

const emptypeList = [

    {
        empId : 1234,
        label : "Fulltime"
    },
    {
        empId : 54565,
        label : "Partime"
    },
    {
        empId : 9854,
        label : "Internship"
    },
    {
        empId : 8458,
        label : "Freelance"
    }

]


const FilterSection = ()=>{



    return(

        <>
                <h1> Filter Section </h1>

                <ul>

                        {
                            emptypeList.map(each=>(

                                <li>

                                        <input id={each.empId} type="checkbox" value={each.empId}/>
                                        <label htmlFor={each.empId}> {each.label} </label>

                                </li>

                            ))
                        }

                </ul>
        
        </>

    )
}




export default FilterSection;