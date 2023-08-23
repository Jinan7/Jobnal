import { Link, useRouteError } from "react-router-dom"
import { styled } from "styled-components";


const Error = () => {
    const error = useRouteError();
    return (<Wrapper>
        <div>
        <h1>404</h1>
        <Link to="/dashboard" className="link">Home</Link>
        </div>
    </Wrapper>)
}


const Wrapper = styled.div`
    height:100vh;
    display:grid;
    place-items: center;
    font-family:monospace;
    color:var(--clr-primary-green);
    
`

export default Error