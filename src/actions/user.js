import axios from "axios";

export const registration = async (email, password, repeat_password, username,first_name, last_name) =>{
    try {
        const response = await axios.post('http://api.zira.givenfly.space/api/user/register/',{
        email,
        password,
        repeat_password,
        username,
        first_name,
        last_name
    } )
    console.log("Response:", response.data.detail)
    } catch (error) {
        console.error(error)
    }
}


export const login = async (password, username) =>{
    try {
        const response = await axios.post('http://api.zira.givenfly.space/api/user/login/',{
        password,
        username
    } )
    localStorage.setItem('token', response.data.token);
    localStorage.removeItem('authError')
    document.location.reload();
    } catch (error) {
        localStorage.setItem("authError",error.response.data.detail)
    }
}


export const createProject = async (title, key) =>{
    try {
        const response = await axios.post('http://api.zira.givenfly.space/api/projects/',{
        title,
        key
    }, { headers: {"Authorization" : `Token ${localStorage.token}`}} )
    console.log("createProject:", response.data)
    } catch (error) {
        console.error(error)
    }
}


export const Logout = ()=>{
    localStorage.clear()
    document.location.reload()
}


