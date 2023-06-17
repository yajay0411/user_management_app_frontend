import axios from "axios";


const Api = axios.create({
    baseURL: "https://nice-cyan-mite-cape.cyclic.app"
});

export const getUserData = () => Api.get('/api/users');

export const postUserData = (userData) => Api.post('/api/users', (userData));

export const deleteSelectedUserData = (userID) => Api.delete(`/api/users/${userID}`);

export const editSelectedUserData = (userID, userData) => Api.patch(`api/users/${userID}`, (userData));
