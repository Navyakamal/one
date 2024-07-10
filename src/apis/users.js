import apiRequest from ".";
import { baseUrl } from "./baseUrl";

export const RegisterUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        url: `${baseUrl}/api/users/register`,
        payload,
        queryStrings: {}
    });
};

export const LoginUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        url: `${baseUrl}/api/users/login`,
        payload,
        queryStrings: {}
    });
};
