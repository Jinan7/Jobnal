import { useContext } from "react"
import { StatsContext } from "../pages/Stats"
import { styled } from "styled-components"



const StatsContainer = () => {
    const {st} = useContext(StatsContext)
    
    return (<Wrapper>{
        Object.keys(st).map((item)=>{
            return <div className="stat">
                <span className={`number ${item}`} >{st[item]}</span>
                <h2 className="info">{item}</h2>
            </div>
        })
        }</Wrapper>)
}


const Wrapper = styled.div`
    
    display:grid;
    gap: 1rem;

    .stat{
        background:var(--clr-primary-milk);
        padding: 1rem;
    }

    .number{
        display:block;
        font-size:7rem;
        font-weight:500;
        width:5rem;
    }

    .pending{
        color: var(--clr-primary-orange-d)
    }

    .interview{
        color: green;
    }

    .declined{
        color: red;
    }

    .info{
        text-transform:uppercase;
        color:var(--clr-gray-5)
    }

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width:1080px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default StatsContainer