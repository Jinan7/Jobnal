import { useLoaderData } from "react-router-dom"
import fetchUtil from "../../util/fetchUtil"
import { JobContainer } from "../components/jobsContainer"
import { styled } from "styled-components"
import { createContext } from "react"



export const allJobsLoader =  async () => {
    try {
        const response = await fetchUtil.get('jobs')
        console.log(response.data)
        return response.data
    } catch (e) {
        return e;
    }
}

export const AllJobsContext = createContext();
const Alljobs = () => {
    const jobs = useLoaderData()
    return (<AllJobsContext.Provider value={jobs}>
        <Wrapper><JobContainer/></Wrapper>
    </AllJobsContext.Provider>)
}

const Wrapper = styled.div`
    
`

export default Alljobs