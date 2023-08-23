import { createContext } from "react"
import fetchUtil from "../../util/fetchUtil"
import { useLoaderData } from "react-router-dom"
import StatsContainer from "../components/StatsContainer"
import ChartsContainer from "../components/ChartsContainer"
import { styled } from "styled-components"


export const StatsContext = createContext()
export const statsLoader = async (data) => {
    try{
        const response =  await fetchUtil.get('jobs/stats')
        return response.data
    } catch (e){

    }
}
const Stats = () => {
    const data = useLoaderData()
    return (<Wrapper>
        <StatsContext.Provider value={data}>
        <StatsContainer/>
        <ChartsContainer/>
    </StatsContext.Provider>
    </Wrapper>)
}

const Wrapper = styled.div`
    overflow:hidden;
`

export default Stats