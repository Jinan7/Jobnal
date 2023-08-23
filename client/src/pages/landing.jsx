import { FaFeatherPointed } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import { styled } from "styled-components"


const Landing = () => {
    return (<Wrapper>
        <div className="landing-info">
        <h2 className="logo">jobnal <FaFeatherPointed/></h2>
        <p>"Welcome to jobnal, where job application tracking meets simplicity. Take the guesswork out of your job search – know the status of each application at a glance. Your journey to career success starts here."</p>
        <LContainer>
            <Link to='/register' className="link">register</Link>
            <Link to='/login' className="link">login</Link>   
        </LContainer>
        </div>
    </Wrapper>)
}


const Wrapper = styled.div`
    height: 100vh;
    padding: 1rem;
    display:grid;
    place-items:center;

    .landing-info{
        max-width: 1080px;
        margin: auto;
        text-align:center;
    }

    p{
        color: var(--clr-gray-10);
        max-width: 50rem;
        margin: auto;
        margin-bottom:1rem;
    }

    .logo{
        text-transform:capitalize;
        color:var(--clr-primary-green);
        margin-bottom: 1rem;
    }
`

const LContainer = styled.div`
        width: fit-content;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

`
export default Landing