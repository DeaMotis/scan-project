import { makeAutoObservable } from "mobx";
import AuthService from './services/AuthService';

export default class Store {
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.initializeAuth();
    }

    initializeAuth() {
        const token = localStorage.getItem('token');
        this.isAuth = Boolean(token);
    }


    setAuth(bool) {
        this.isAuth = bool;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(username, password) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            // Обработка ошибки
            console.error('Ошибка входа:', e.response?.data?.message || e.message);
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
            console.error('Ошибка выхода:', e.response?.data?.message || e.message);
        }
    }
}
