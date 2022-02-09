export const getJobListings = () => {
    return fetch('http://localhost:8000/joblistings', {
        headers: {

            "Authorization": `Token ${localStorage.getItem("jobify_token")}`
        }
    }).then(res => res.json())
}

export const createJobListing = (jobListing) => {
    return fetch("http://localhost:8000/joblistings", { 
        method: 'POST',
        headers: {

            "Authorization": `Token ${localStorage.getItem("jobify_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobListing)
    })
}

export const jobListUsersFetcher = (companyId) => {
    fetch(`http://localhost:8000/joblistings?companyId=${companyId}&_expand=company`)
    .then(res => res.json())
            .then((data) => {
                setJoblisting(data)
})
}

export const deleteJobListing = (jobListingId) => {
    fetch(`http://localhost:8000/joblistings/${jobListingId} `, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("jobify_token")}`,
            "Content-Type": "application/json"
        }
    })
    .then(() => {
        window.location.reload(false);
    })
}

export const joinJobListing = jobListingId => {
    return fetch(`http://localhost:8000/joblistings/${ jobListingId }/signup`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("jobify_token")}`
        }
    })
        .then(response => response.json())
}