import axios from "axios";

export const registration = async (values) =>{
    try {
        const response = await axios.post('http://api.zira.givenfly.space/users/register/',
        values
     )
    console.log("Response:", response.data.detail)
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


