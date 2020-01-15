import Axios from "axios";
import qs from "querystring";

const instance = Axios.create({
    baseURL: "/",
    timeout: 25000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    withCredentials: true
});

instance.interceptors.request.use(
    config => {
        if (config.method === "post") {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    err => {
        Promise.reject(err);
    }
);

instance.interceptors.response.use(
    response => {
        const { data } = response;
        return data;
    },
    err => {
        return [err];
    }
);

export let request1 = instance;

export default {
    get: (url, params = {}, headers = {}) => {
        return new Promise((resolve, reject) => {
            return instance
                .get(url, {
                    params: { ...params },
                    headers: { ...headers }
                })
                .then(data => {
                    let res = data;
                    if (Array.isArray(res)) {
                        reject(res[0]);
                    } else {
                        if (res && res.status === 1) {
                            resolve(res.data);
                        } else {
                            reject(
                                res || { message: `系统出错了,结果为： ${res}` }
                            );
                        }
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    post: (url, params = {}, headers = {}) => {
        return new Promise((resolve, reject) => {
            return instance
                .post(url, { ...params }, { headers: { ...headers } })
                .then(data => {
                    let res = data;
                    if (Array.isArray(res)) {
                        reject(res[0]);
                    } else {
                        if (res && res.status === 1) {
                            resolve(res.data);
                        } else {
                            reject(
                                res || { message: `系统出错了,结果为： ${res}` }
                            );
                        }
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};
