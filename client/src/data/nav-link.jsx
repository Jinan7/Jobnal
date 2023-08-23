import { AiFillFolderAdd } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import {IoStatsChartSharp } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
export const data = [
    {name:"all jobs", link:'.', icon: <MdWork/>},
    {name:"add job", link:'./addjob', icon: <AiFillFolderAdd/>},
    {name:"stats", link:'./stats', icon: <IoStatsChartSharp/>},
    {name:"profile", link:'./profile', icon: <RiProfileLine/>},
]