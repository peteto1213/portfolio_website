import axios from 'axios'

// Login handler
const login = async(userData) => {
    const response = await axios.post('/api/user/login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    login
}

export default authService