import { Outlet, redirect, useLoaderData } from "react-router-dom"
import Navbar from "../components/Navbar"
import { styled } from "styled-components"
import BigSideBar from "../components/BigSideBar"
import SmallSideBar from "../components/SmallSideBar"
import { createContext, useState } from "react"
import fetchUtil from "../../util/fetchUtil"

export const DashContext = createContext()

export const dashBoardLoader = async () => {
    try {
        const response = await fetchUtil.get('/users/user')
        return response.data
    } catch (e) {
        return redirect('/')
    }
}

const Dashboard = () => {
     const [showSide, setShowSide] = useState(false);
     const user = useLoaderData()
     const toggleSide = () =>{
        setShowSide((showSide)=>{
            return !showSide
        })
     }
    return (<DashContext.Provider value={{showSide, toggleSide, user}}>
        <Wrapper>
        <Navbar/>
        <SmallSideBar/>
        <main className="main">
            <BigSideBar/>
            <div className="page-container"><Outlet/></div>
        </main>
        </Wrapper>
    </DashContext.Provider>)
}




const Wrapper = styled.div`

   
    

    .main{
        
        min-height:calc(100vh - 4rem);
    }
    .test{
        position:sticky;
        top:20rem;
    }
    
    .page-container{
        height:100%;
        width:100%;
        max-width:1080px;
        margin: 0 auto;
        padding:1rem;
    }

    @media screen and (min-width: 768px){
        .main{
            display:grid;
            grid-template-columns: auto  1fr;
        }
    }
`
export default Dashboard
