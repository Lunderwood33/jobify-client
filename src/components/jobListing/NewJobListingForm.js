import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {  getJobTypes } from "../job/JobManager.js";
import { createJobListing } from "./JobListingManager.js";

export const JobListingForm = () => {
    const [jobListing, setState] = useState({})
    const [jobTypes, setJobTypes] = useState([])
    const history = useHistory()

    useEffect(() => {
        getJobTypes().then(typesData => setJobTypes(typesData))
    }, [])

    const [currentJobListing, setJobListing] = useState({})

    useEffect(() => {
        // TODO: Get all existing games from API
    }, [])

    const changeJobListingState = (domJobListing) => {
        const copyJobListing = {...currentJobListing}
        copyJobListing[domJobListing.target.name] = domJobListing.target.value
        setJobListing(copyJobListing)
        // TODO: Complete the onChange function
    }

    return (
        <form>
            <label>Title</label>
            <input onChange={changeJobListingState} type="text" name="title"></input>
    
            <label>Description</label>
            <input onChange={changeJobListingState} type="text" name="description"></input>
    
            <label>Wage</label>
            <input onChange={changeJobListingState} type="number" name="wage"></input>
    
            <label>Company</label>
            <input onChange={changeJobListingState} name="company"></input>
    
            <label>Job Type</label>
            <select onChange={changeJobListingState} name="jobTypeId">
                <option value="0">Select a job type</option>
                {
                    jobTypes.map(type => <option value={type.id}>{type.label}</option>)
                }
            </select>
    
            <label>Job Listing URL</label>
            <input onChange={changeJobListingState} type="text" name="jobListingURL"></input>

           
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // TODO: Call the createEvent function and pass it the event object
                    createJobListing(currentJobListing).then(() => history.push('/joblistings'))

                    // TODO: Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Job Listing</button>
        </form>
    )
}

