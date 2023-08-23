
import { Form, Link, redirect, useLoaderData, useOutletContext} from "react-router-dom"
import { styled } from "styled-components"
import {GiScrollQuill} from "react-icons/gi"
import fetchUtil from "../../util/fetchUtil"
import { useContext } from "react"
import { DashContext } from "./dashboard"
import { JOB_STATUS, JOB_TYPE } from "../../util/constants"


export const editJobLoader =  async ({params})=> {
}

export const profileAction = async ({request,params})=>{
}



const Profile = () => {
    const {user} = useContext(DashContext)
    return (<Wrapper>       
        <div className="form-container">
            <h2 className="logo">Profile</h2>
        <Form method="post"  className="form" encType="multipart/form-data">
            <div>
                <label htmlFor="firstname" className="formlabel">first name</label>
                <input type="text" name="firstname"  className="formInput" required defaultValue={user.firstname} /></div>
            <div>
                <label htmlFor="company" className="formlabel">last name</label>
                <input type="text" name="company"  className="formInput" required defaultValue={user.lastname}/></div>
            <div>
                <label htmlFor="company" className="formlabel">email</label>
                <input type="text" name="company"  className="formInput email" required defaultValue={user.email}/></div>
            <div>
                <label htmlFor="company" className="formlabel">location</label>
                <input type="text" name="company"  className="formInput" required defaultValue={user.location}/></div>
            <button type="submit" className="link btn">update</button>
        </Form>
        </div>
        </Wrapper>)
    }
    
    
    const Wrapper = styled.div`
        height: 100%;
        display:grid;
        place-items:center;


        .formlabel{
            display: inline-block;
            margin-bottom: 0.5rem;
            font-size: large;
            text-transform:capitalize;
            color:var(--clr-gray-5);
        }
        .form-container{
            width:100%;
        }

        .logo{
            text-align:center;
        }
        h4{
            text-transform:capitalize;
            color: var(--clr-primary-green);
            font-size: 1.5rem;
            margin-bottom:3rem;
        }
        .form{
            padding:3rem 1rem;
            display:grid;
            gap: 1rem;
            border-radius: 0.3rem;
            background: var(--clr-primary-milk);
            width: 100%
        }
    
        .formInput{
            background: var(--clr-primary-milk-d);
            border: 2px solid var(--clr-gray-5);
            border-radius: var(--radius);
            margin-bottom: 1rem;
            font-size:1.5rem;
            font-family: monospace;
            margin-bottom: 2rem;
            width: 100%;
            padding: 0.4rem;
        }


        .formInput::placeholder{
            display: inline-block;
            padding: 1rem;
        }

        .formInput:disabled{
            background:var(--clr-gray-10);
        }
    
        .formInput:focus, .formInput:hover:not(.formInput:disabled){
            outline:none;
            background: var(--clr-primary-milk);
        }
        .btn{
            border:none;
            display: block;
            margin-bottom:2rem;
            align-self:end;
            padding: 1rem;
            
        }

        @media screen and (min-width:768px){
            .form{
                grid-template-columns: 1fr 1fr;
            }

            .btn{
                justify-self:start;
            }
        }
    `

export default Profile