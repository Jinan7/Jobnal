import { styled } from "styled-components";
import { DashContext } from "../pages/dashboard";
import { useContext } from "react";
import { data } from "../data/nav-link";
import { NavLink } from "react-router-dom";



const SmallSideBar = () => {
    const {showSide, toggleSide} = useContext(DashContext)
    if(showSide)
    return (<Wrapper className="">
        <div className='container show-container'>
            <div className="content">
                <div className="link-container">
                    {data.map((item, index)=>{
                        const {name, link, icon} = item;
                        return <NavLink key={index} to={link} className="nav-link" onClick={toggleSide}>{icon} {name}</NavLink>
                    })}
                </div>
            </div>
        </div>
    </Wrapper>)

    return<></>
}

const Wrapper = styled.div`
    padding:1rem;
    position:fixed;
    width:100%;
    height:100%;
    z-index:100;

    .container{
        display:grid;
        place-items:center;
        background: var(--clr-primary-milk);
        width:100%;
        height:100%;
        overflow:hidden;
    }

    .show-container{
        display:grid;
    }

    @media screen and (min-width: 768px) {
        display:none;
    }
`

export default SmallSideBar