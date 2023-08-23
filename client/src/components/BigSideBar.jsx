import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import { data } from "../data/nav-link"
import { DashContext } from "../pages/dashboard"
import { useContext } from "react"

useContext

const BigSideBar = () => {

    const {showSide} = useContext(DashContext)
    return (<Wrapper>
        <div className={showSide? `container`: `container hide-container`}>
            <div className="content">
                <div className="link-container">
                    {data.map((item, index)=>{
                        const {name, link, icon} = item;
                        return <NavLink key={index} to={link} className="nav-link">{icon} {name}</NavLink>
                    })}
                </div>
            </div>
        </div>
    </Wrapper>)
}


const Wrapper = styled.div`
    display: none;
    position:relative;
    background: var(--clr-primary-milk);
    .container{
        width: 20rem;
        position:sticky;
        top:4rem;
        height:100%;
        overflow:hidden;
    }

    .hide-container{
        width:0;
    }
    .content{
        display: grid;    
        height:100%;
        place-items:center;
        padding:1rem;
        position:sticky;
        top: 4rem;
    }

    @media screen and (min-width: 768px) {
        display:block;
    }
`

export default BigSideBar