

import axios from "axios";
import {messagesTXT} from "../variables/variables"



export const registration = async (values, reduxFunc) =>{
    
    
    try {
        
        const response = await axios.post('http://api.zira.givenfly.space/users/register/',
        values
        
     )
    sessionStorage.setItem('registation', response.data.detail);
    reduxFunc(messagesTXT.successfulRegistration)
    
    } catch (error) {
        console.error(error)
    }
}


export const login = async (values) =>{
    try {
        const response = await axios.post('http://api.zira.givenfly.space/users/login/',values)
        localStorage.setItem('token', response.data.token);
        localStorage.removeItem('authError')
        document.location.reload();
    } catch (error) {
        localStorage.setItem("authError",error.response.data.detail)
    }
}


export const createProject = async (values) =>{
    try {

        const response = await axios.post('http://api.zira.givenfly.space/api/projects/',
        values, { headers: {"Authorization" : `Token ${localStorage.token}`}} )
        
    } catch (error) {
        console.error(error)
    }
}


export const Logout = ()=>{
    localStorage.clear()
    document.location.reload()
}

export const getIssueInfo = async (projectId, issueId) =>{
    try {
        const response = await axios.get(`http://api.zira.givenfly.space/projects/${projectId}/${issueId}`, { headers: {"Authorization" : `Token ${localStorage.token}`}} )

        console.log(response)
        
    } catch (error) {
        console.error(error)
    }
}
