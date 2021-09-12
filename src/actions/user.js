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
    console.log("Response:", response.data.token)
    } catch (error) {
        console.error(error)
    }
}