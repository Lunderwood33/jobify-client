export const getJobs = () => {
    return fetch('http://localhost:8000/jobs', {
        headers:{
        'Authorization': `Token ${localStorage.getItem('jobify_token')}`
        }
     })
        .then(res => res.json())
}

export const createJob = (job) => {
    return fetch("http://localhost:8000/jobs", { 
        method: "POST",
        headers:{
            'Authorization': `Token ${localStorage.getItem('jobify_token')}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
     })
        
}


export const getJobTypes = () => {
    return fetch("http://localhost:8000/jobtypes", { 
        headers:{
            'Authorization': `Token ${localStorage.getItem('jobify_token')}`
            }
     })
        .then(res => res.json())
}