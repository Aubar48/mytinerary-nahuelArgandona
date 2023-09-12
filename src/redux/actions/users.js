import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl.js";

const read_user = createAsyncThunk(
    'read_user',
    async ({ user_id }) => {
        console.log(user_id);  //  i/users/:user_id
        try {
            let data = await axios(apiUrl + 'users/' + user_id)
            console.log('resultado', data);
            return { userItineraries: data.data.response }
        } catch (error) {
            console.log(error);
            return { userItineraries: {} }
        }
    }
)

const read_users = createAsyncThunk(
    'read_users',
    async () => {
        try {
            let users = await axios(apiUrl + 'users')

            return {
                users: users.data.response
            }

        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }
    }
)

const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signin', obj.data)
            //console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/token', null, authorization)
            //console.log(data);
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/signout', null, authorization)
            console.log(data);
            localStorage.removeItem('token')
            return {
                user: {},
                token: '',
                messages: [],
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message],
            }
        }
    }
)

const signup = createAsyncThunk(
    'signup',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            const response = await axios.post(apiUrl + 'auth/register', obj.data, null, authorization);

            return {
                user: response.data.response.user,
                token: response.data.response.token,
                messages: [],
            };
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message],
            };
        }
    }
);

const update_user = createAsyncThunk(
    'update_user',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.put(apiUrl + 'users', obj.data, authorization)
            console.log(data);
            return {
                user: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                user: {}
            }
        }

    }
)
const user_actions = { read_user, read_users, signin, signin_token, signout, signup, update_user }
export default user_actions