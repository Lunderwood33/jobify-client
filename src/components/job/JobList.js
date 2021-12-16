import react, { useEffect, useState } from "react";
import { getJobs } from "./JobManager.js";

export const JobList = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getJobs().then(jobsData => setJobs(jobsData))
    }, [])

    // return (
    //     <article>
    // {
    //     jobListings.map(jobListing => (
    //         <section>
    //             <p>Title: {jobListing.title}</p>
    //             <p>Description: {jobListing.description}</p>
    //             <p>Wage: {jobListing.wage}</p>
    //             <p>Company: {jobListing.company.name}</p>
    //             <p>Job Type: {jobListing.job_type.label}</p>
    //             <p>Interested: {jobListing.interested}</p>
    //             <p>Job Listing URL: {jobListing.url}</p>
    //         </section>
    //     ))
    // }

    //     </article>
    // )
}
