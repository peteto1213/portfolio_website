import axios from 'axios'

const ADMIN_API_GATEWAY = 'http://localhost:5050/api/admin'

// Login handler
const login = async(userData) => {
    const response = await axios.post(`${ADMIN_API_GATEWAY}/login`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout
const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    login,
    logout
}

export default authService