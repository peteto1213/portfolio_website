import axios from 'axios'

// Login handler
const login = async(userData) => {
    const response = await axios.post('http://localhost:5050/api/admin/login', userData)

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