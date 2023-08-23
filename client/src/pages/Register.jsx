import { Form, Link, redirect } from "react-router-dom"
import { styled } from "styled-components"
import {GiScrollQuill} from "react-icons/gi"
import fetchUtil from "../../util/fetchUtil"

export const action = async function ({request}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    
    try {
        const response = await fetchUtil.post('/auth/register', data)
        return redirect('/dashboard')
    } catch (e){
        console.log(e)
        return e
    }
    return ''
}
const Register = () => {
    return (<Wrapper>
    <Form method="post"  className="form">
        <h4>register <GiScrollQuill/></h4>
        <div><input type="text" name="firstname" placeholder="firstname" className="formInput" required/></div>
        <div><input type="text" name="lastname" placeholder="lastname" className="formInput" required/></div>
        <div>
        <input type="text" name="email" placeholder="email" className="formInput"/>
        </div>
        <div>
        <input type="location" name="location" placeholder="location" className="formInput"/>
        </div>
        <div>
        <input type="password" name="password" placeholder="password" className="formInput"/>
        </div>
        <button className="link btn">submit</button>
        <div>
            <p>Already a member? <Link className="formlink" to="/login">login</Link></p>
        </div>
    </Form>
    </Wrapper>)
}


const Wrapper = styled.div`
    height: 100vh;
    display:grid;
    place-items:center;

    h4{
        text-transform:capitalize;
        color: var(--clr-primary-green);
        font-size: 1.5rem;
        margin-bottom:3rem;
    }
    .form{
        padding:1rem;
        display:grid;
        place-items: center;
        border: 3px solid black;
        border-radius: 0.3rem;
    }

    .formInput{
        background: transparent;
        border:none;
        border-bottom: 1px solid black;
        margin-bottom: 1rem;
        font-size:1.5rem;
        font-family: monospace;
        margin-bottom: 2rem;
    }

    .formInput:focus, .formInput:hover{
        outline:none;
        border:none;
        background: var(--clr-primary-milk);
    }
    .btn{
        border:none;
        display: block;
        margin-bottom:2rem;
    }
`
export default Register