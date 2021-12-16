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

