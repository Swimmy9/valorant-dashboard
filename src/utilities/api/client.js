import axios from "axios";

class ApiClient {

    instance

    constructor(config) {
        let baseConfig = {
            baseURL: `${document.location.protocol}//${document.location.host}/api`
        }
        this.instance = axios.create({ ...baseConfig, ...config })
    }

    async home() {
        const { data } = await this.instance.get("/home")
        return data
    }

    async rank() {
        const { data } = await this.instance.get("/rank")
        return { data }
    }


}

const client = new ApiClient({})
export default client