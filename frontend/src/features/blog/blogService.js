import axios from "axios";

const BLOG_API_GATEWAY = 'http://localhost:5050/api/blog'

const getAllBlogs = async() => {
    const response = await axios.get(BLOG_API_GATEWAY)

    return response.data
}

const blogService = {
    getAllBlogs
}

export default blogService