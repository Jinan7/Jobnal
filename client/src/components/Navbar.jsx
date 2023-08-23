import { useContext } from "react"
import { FaBarsStaggered, FaFeatherPointed } from "react-icons/fa6"
import { styled } from "styled-components"

import { AiOutlineUser } from "react-icons/ai";
import { DashContext } from "../pages/dashboard";



const Navbar = () => {
    
    const {showSide, toggleSide} = useContext(DashContext)
    return (<Wrapper id='nav'>
        <span className="nav-icon" onClick={toggleSide}><FaBarsStaggered className="icon"/></span>
        <h2 className="logo">jobnal <FaFeatherPointed/></h2>
        <span className="user"><AiOutlineUser className="icon"/></span>
    </Wrapper>

    )
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:auto 1fr auto;
    align-items:center;
    justify-items:center;
    padding: 1rem;
    background-color: var(--clr-primary-milk);
    height: 4rem;
    position:sticky;
    z-index:99;
    width:100%;
    top:0;
    left:0;
    .logo{
        margin-bottom:0;
    }

    .nav-icon{
        justify-self:start;
    }
    .user{
        justify-self:end;
    }
    .icon{
        font-size:1.5rem;
        margin:0;
        color:var(--clr-primary-green);
    }

    .icon:hover{
        color:var(--clr-primary-orange-d);
    }
    
`
export default Navbar