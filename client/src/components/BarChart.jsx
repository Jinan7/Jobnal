import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import { styled } from 'styled-components'


export const BarChartComponent = ({data}) => {
    // console.log(data)
    
    return(<Wrapper>
        <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey={`date`}/>
            <YAxis allowDecimals={false}/>
            <Tooltip/>
            <Bar className='bar' dataKey='count' fill={`var(--clr-primary-orange-d)`} barSize={50}/>
        </BarChart>
    </ResponsiveContainer>
    </Wrapper>)
}

const Wrapper = styled.div`
    width:100%;
`

