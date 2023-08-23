import { redirect } from "react-router-dom"
import fetchUtil from "../../util/fetchUtil"



export const deleteJobLoader = async ({params}) => {
    const {id} = params
    try{
        const result = await fetchUtil.delete(`jobs/${id}`)
    }catch(e){
        console.log(e)
    }
    return redirect('/dashboard')
}