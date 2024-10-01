import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService.js"; // Убедитесь, что путь верный

export default class Store {
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.initializeAuth();
    }

    initializeAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            this.isAuth = true;
        }
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async login(username, password) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            console.log(response);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}
