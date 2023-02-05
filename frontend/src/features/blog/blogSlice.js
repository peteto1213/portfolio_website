import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

const initialState = {
    blogs: [],
    isSuccess: false,
    isError: false,
    isLoading: false
}

export const getAllBlogs = createAsyncThunk('blog/getAllBlogs', async(_, thunkAPI) => {
    try {

        return await blogService.getAllBlogs()

    } catch (error) {
        
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)

    }
})

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        reset: (state) => {
            state.blogs = []
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.blogs = []
            })
    }
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer