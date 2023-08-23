import { useContext } from "react"
import { FaCircle, FaLocationDot } from "react-icons/fa6"
import { styled } from "styled-components"
import { AllJobsContext } from "../pages/Alljobs"
import { MdOutlineWork } from "react-icons/md"
import { Form, Link } from "react-router-dom"

const deleteJobAction = (data)=>{
    console.log(data)
    return null
}
export const Job = (props) => {
    const { id,company, position, jobStatus, jobType, jobLocation} = props
    return(<Wrapper>
        <div className="header-container">
            <div className="box"></div>
            <div className="header">
            <h2 className="position">{position}</h2>
            <span className="company">{company}</span>
            <span className="location"><FaLocationDot className="icon"/> {jobLocation}</span>
            </div>
        </div>
        <div className="info-container">
        <div className="info">
            <span className="type"><MdOutlineWork/> {jobType}</span>
            <span className={`status`}><FaCircle className={`status-icon ${jobStatus}`}/> {jobStatus}</span>
        </div>
        <div className="btncontainer">
            <Link to={`./editjob/${id}`} className="link">edit</Link>
            <Link to={`../deletejob/${id}`} className="link">delete</Link>
            
        </div>
        </div>
    </Wrapper>)
}


const Wrapper = styled.div`
    background: var(--clr-primary-milk);
    width: 100%;
    padding: 1rem;
    text-transform:capitalize;
    /* .box{
        width:3rem;
        border-radius: var(--radius);
        background: var(--clr-gray-1)
    } */
    .header-container{
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 1rem;
        border-bottom: 1px solid var(--clr-primary-orange-d);
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        background:var(--clr-primary-green);
        color:var(--clr-primary-milk);
    }

    .status{
        display:grid;
        grid-template-columns:auto 1fr;
        align-items:center;
        gap:0.2rem;
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

    .position{
        margin:0;
        padding:0;
    }

    .company{
        text-transform:capitalize;
        font-weight: 500;
        margin-bottom: 0.5rem;
        display:block;
    }

    .icon{
        color: var(--clr-gray-5)
    }

    .info{
        display:grid;
        grid-template-rows: 1fr 1fr;
        text-transform:capitalize;
        font-weight: 500;
    }

    .info-container{
        display:grid;
        grid-template-columns: 1fr auto;
        align-items:center;
    }
    .link{
        text-align:center;
    }

    .btncontainer{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1rem;
    }

    .btn{
        margin:0;
    }
`