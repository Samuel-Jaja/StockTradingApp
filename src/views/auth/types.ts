export interface LoginCredential {
    email: string;
    password: string;
}

export interface LoginResponse {
    personName: string;
    email: string;
    token: string;
}

export interface RegisterCredential {
    personName: string;
    email: string;
    phonenumber: string;
    password: string;
    cornfirmpassword: string;
}

export interface RegisterResponse {
    personName: string;
    email: string;
    token: string;
}

export const LOGIN_COMMAND = 'LoginCommand';
export const LOGIN_RESPONSE = 'LoginResponse';

export const REGISTER_COMMAND = 'RegisterCommand';
export const REGISTER_RESPONSE = 'RegisterResponse';
