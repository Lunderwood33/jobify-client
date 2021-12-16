import React from "react"
import { Route } from "react-router-dom"
import { JobListingList } from "./jobListing/JobListingList"
import { JobListingForm } from "./jobListing/NewJobListingForm"
import { JobForm } from "./job/JobForm"

export const ApplicationViews = () => {
    return <>
        <main>
            Jobify

            <Route exact path="/joblistings">
                <JobListingList />
            </Route>
            {/* <Route exact path="/joblisting/new">
                <JobForm />
            </Route> */}
            <Route exact path="/job/new">
                <JobForm />
            </Route>
            <Route exact path="/joblisting/new">
                <JobListingForm />
            </Route>

        </main>
    </>
}
