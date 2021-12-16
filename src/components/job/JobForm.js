import react, { useEffect, useState } from "react";
import {  createJob, getJobTypes } from "./JobManager.js";
import { useHistory } from "react-router-dom";

export const JobForm = () => {
    const [job, setState] = useState({})
    const [jobTypes, setJobTypes] = useState([])
    const history = useHistory

    useEffect(() => {
        getJobTypes().then(typesData => setJobTypes(typesData))
    }, [])

    const handleOnChange = (jobListing) => {
        const copyJob = { ...job }
        copyJob[jobListing.target.name] = jobListing.target.value
        setState(copyJob)
    }

    const saveJob = (jobListing) => {
        jobListing.preventDefault()

        createJob(job).then(() => {
            history.push('/')
        })
    }

    return (
        <form>
            <label>New Job Type</label>
            <input type="text" name="newJobType"></input>


            <button onClick={(jobListing) => saveJob(jobListing)}>Save Job</button>
        </form>
    )

    
    

    // return (
    //     <form>
    //         <label>Title</label>
    //         <input type="text" name="title"></input>

    //         <label>Description</label>
    //         <input type="text" name="description"></input>

    //         <label>Wage</label>
    //         <input type="number" name="wage"></input>

    //         <label>Company</label>
    //         <input name="company"></input>

    //         <label>Job Type</label>
    //         <select>
    //             <option value="0">Select a job type</option>
    //             {
    //                 jobTypes.map(type => <option value={type.id}>{type.label}</option>)
    //             }
    //         </select>

    //         <label>Job Listing URL</label>
    //         <input type="text" name="jobListingURL"></input>
    //     </form>
    // )
}