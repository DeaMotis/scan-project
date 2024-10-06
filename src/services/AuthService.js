import $api from "./axiosInstance.js";


export default class AuthService {
    static async login(username, password) {
        return $api.post('/login',{
            login:username,
            password:password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        } )
    }
    static async logout() {
        console.log('logout');
    }

}