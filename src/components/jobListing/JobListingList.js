import react, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getJobListings } from "./JobListingManager.js";

export const JobListingList = () => {

    const [jobListings, setJobListings] = useState([])
    const history = useHistory()

    useEffect(() => {
        getJobListings().then(jobListingsData => setJobListings(jobListingsData))
    }, [])

    return (
        <article>

            <header>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/joblisting/new" })
                    }}
                >Create New Job Listing</button>
            </header>
            {
                jobListings.map(jobListing => (

                    <section>
                        <p>Title: {jobListing.title}</p>
                        <p>Description: {jobListing.description}</p>
                        <p>Wage: {jobListing.wage}</p>
                        <p>Company: {jobListing.company.bio}</p>
                        <p>Job Type: {jobListing.job_type.label}</p>
                        <p>Interested: {jobListing.interested}</p>
                        <p>Job Listing URL: {jobListing.url}</p>
                    </section>
                ))
            }


        </article>
    )
}