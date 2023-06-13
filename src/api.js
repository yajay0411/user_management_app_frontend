import axios from "axios";


const Api = axios.create({
    baseURL: "http://localhost:3000"
});

export const getUserData = () => Api.get('/api/users');

export const postUserData = (userData) => Api.post('/api/users', (userData));

export const deleteSelectedUserData = (userID) => Api.delete(`/api/users/${userID}`);

export const editSelectedUserData = (userID, userData) => Api.patch(`api/users/${userID}`, (userData));
