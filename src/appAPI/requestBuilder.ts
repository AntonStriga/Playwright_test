import axios, {AxiosRequestConfig } from "axios";
import { url } from "../testData/apiData";
import { User } from "./user";

export const requestBuilder = () => {
    type methodType = 'get' | 'post' | 'put' | 'patch' | 'delete'
    const methods: methodType[] = ['get', 'post', 'put', 'patch', 'delete']
    return (baseUrl: string) => {
        const requestObject: {[key: string]: <T>(config: AxiosRequestConfig, user?: User) => Promise<T>} = {}
        for (const method of methods){
            requestObject[method] = async (config: AxiosRequestConfig = {}, user?: User)=>{
                try {
                    const token = (user) ? (await axios.post(url.tokenUrl, {"userName": user.userName, "password": user.userPassword})).data.token : ""
                    const res = (
                        await axios({
                            method: method,
                            baseURL: url.baseUrl + baseUrl,                            
                            ...config,
                            headers: {...config.headers, Authorization:`Bearer ${token}`}
                        })
                    ).data
                    return res                  
                }
                catch (error) {
                    if (axios.isAxiosError(error)) {
                        const el = new Error(error.message + '\n' + JSON.stringify(error.response?.data))
                        el.name = error.name                        
                        throw el
                      } else {
                        console.log('Error:', error.message);
                      }
                }                
            }
        }
        return requestObject as {[key in methodType]: <T>(config?: AxiosRequestConfig, user?: User) => Promise<T>};
    }
}

