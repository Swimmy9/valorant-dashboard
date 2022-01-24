import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { rank } from "../../types";

class ApiClient {

    private instance: AxiosInstance

    constructor(config: AxiosRequestConfig = {}) {
        let baseConfig: AxiosRequestConfig = {
            baseURL: `${document.location.protocol}//${document.location.host}/api`
        }
        this.instance = axios.create({ ...baseConfig, ...config })
    }

    public async home(): Promise<rank> {
        const { data } = await this.instance.get("/home")
        return data
    }

    public async rank(): Promise<rank> {
        const { data } = await this.instance.get("/rank")
        return data
    }


}

const client = new ApiClient({})
export default client