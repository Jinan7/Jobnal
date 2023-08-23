
import { Form, Link, redirect, useLoaderData, useOutletContext} from "react-router-dom"
import { styled } from "styled-components"
import {GiScrollQuill} from "react-icons/gi"
import fetchUtil from "../../util/fetchUtil"
import { useContext } from "react"
import { DashContext } from "./dashboard"
import { JOB_STATUS, JOB_TYPE } from "../../util/constants"


export const editJobLoader =  async ({params})=> {
    const {id} = params;
    try {
        const response = await fetchUtil.get(`jobs/${id}`)
        return response.data
    }catch(e){
        return e
    }
}

export const editJobAction = async ({request,params})=>{
    const {id} = params
    const data = await request.formData()
    const formdata = Object.fromEntries(data)
    try {
        const response = await fetchUtil.patch(`jobs/${id}`, formdata)
        return redirect('/dashboard')
    }catch(e){

    }
    return null
}



const EditJob = () => {
    const {user} = useContext(DashContext)
    const {_id,company,position,jobStatus,jobType, jobLocation} = useLoaderData()
    return (<Wrapper>       
        <div className="form-container">
            <h2 className="logo">edit job</h2>
        <Form method="post"  className="form">
            <div>
                <label htmlFor="position" className="formlabel" >position</label>
                <input type="text" name="position"  className="formInput" required defaultValue={position}/></div>
            <div>
                <label htmlFor="company" className="formlabel">company</label>
                <input type="text" name="company"  className="formInput" required defaultValue={company}/></div>
            <div>
                <label htmlFor="jobStatus" className="formlabel">job status</label>
                <select name="jobStatus"  className="formInput" defaultValue={jobStatus}>
                    {Object.values(JOB_STATUS).map((status)=>{
                        return <option key={status} value={status}>{status}</option>
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="location" className="formlabel">location</label>
                <input type="text" name="jobLocation"  className="formInput" defaultValue={jobLocation}/>
            </div>
            <div>
                <label htmlFor="jobType" className="formlabel">job type</label>
                <select name="jobType"  className="formInput" defaultValue={jobType}>
                    {Object.values(JOB_TYPE).map((status)=>{
                        return <option key={status} value={status}>{status}</option>
                    })}
                </select>
            </div>
            <button type="submit" className="link btn">submit</button>
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
            grid-template-columns: 1fr 1fr;
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
            text-transform:capitalize;
            padding: 0.4rem;
        }

        .formInput::placeholder{
            display: inline-block;
            padding: 1rem;
        }
    
        .formInput:focus, .formInput:hover{
            outline:none;
            background: var(--clr-primary-milk);
        }
        .btn{
            border:none;
            display: block;
            margin-bottom:2rem;
            align-self:end;
            padding: 1rem;
            justify-self:start;
        }

        @media screen and (min-width:768px){
            .form{
                grid-template-columns: 1fr 1fr;
            }
        }
    `

export default EditJob