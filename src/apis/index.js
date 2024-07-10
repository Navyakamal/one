import axios from "axios";

const apiRequest = async ({ method, url, payload, queryStrings }) => {
    try {
        const response = await axios({
            method,
            url,
            data: payload,
            params: queryStrings,
           
        },
    {
        headers:{},
    });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default apiRequest;
