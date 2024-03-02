import axios from "axios";
import VueAxios from "vue-axios";

class httpClient {

    static init(app) {
        httpClient.vueInstance = app;
        httpClient.vueInstance.use(VueAxios, axios);
        httpClient.vueInstance.axios.defaults.withCredentials = true;
        httpClient.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_API_URL;
        httpClient.vueInstance.axios.defaults.headers.common["Accept"] = "application/json";
        httpClient.vueInstance.axios.defaults.headers.common["Content-Type"] = "application/json";

        httpClient.vueInstance.axios.interceptors.response.use(response => response, error => {
            if (error.response.status === 401) {
            }

            return Promise.reject(error.response.data)
        })
    }

    static query(resource, params) {
        return httpClient.vueInstance.axios.get(resource, { params: params });
    }

    static post(resource, params) {
        return httpClient.vueInstance.axios.post(resource, params);
    }

    static put(resource, params) {
        return httpClient.vueInstance.axios.put(resource, params);
    }

    static delete(resource, params) {
        return httpClient.vueInstance.axios.delete(resource, params);
    }
}

export default httpClient;
