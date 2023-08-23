import { styled } from "styled-components"
import { Job } from "./job"
import { useContext } from "react"
import { AllJobsContext } from "../pages/Alljobs"


export const JobContainer = () => {
    const jobs = useContext(AllJobsContext)
    console.log(jobs)
    if(jobs.length === 0) return(<h1>
        No jobs to display
    </h1>)
    return (<Wrapper>
    {jobs.map((job)=>{
        const {_id, company, position, jobStatus, jobType, jobLocation} = job
        return <Job key={_id} id={_id} company={company} position={position} jobStatus={jobStatus} jobType={jobType} jobLocation={jobLocation}/>
    })}
    </Wrapper>)
}

const Wrapper = styled.div`
    display:grid;
    gap: 1rem;
    width: 100%;

    @media screen and (min-width: 768px){
        
        grid-template-columns: repeat(2, 1fr);
        
    }
    @media screen and (min-width: 992px){
        
        grid-template-columns: repeat(3, 1fr);
        
    }
`