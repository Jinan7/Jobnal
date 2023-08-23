import { useContext } from "react"
import { StatsContext } from "../pages/Stats"
import {BarChartComponent } from "./BarChart"
import { styled } from "styled-components"


const ChartsContainer = () => {
    const {monthly} = useContext(StatsContext)
    return (<Wrapper>

        <h2 className="logo">monthly applications</h2>
        <BarChartComponent data={monthly}/>
    </Wrapper>)
}


const Wrapper = styled.div`
    
    width:90%;

    .logo{
        text-align:center;
        margin-top:4rem;
    }
`

export default ChartsContainer