import { AxiosInstance } from "axios"
import axios from 'axios'

interface ApiOptions {
    routeExtension: string;
    showLogs?: boolean;
    useInterceptors?: boolean;
    modelName: string; 
}

type AnyObject = {[key: string]: any}

type Request = (body: AnyObject, params: string ) => AnyObject

type AvailableRequests =  { [key: string]: Request}

interface RequestOptions {
    requestName: string;
    controllerPathExtension: string;
}

export class ApiService {
    public modelName!: string
    public developmentMode!: boolean
    public originURL!: string
    public routeExtension!: string
    public apiClient!: AxiosInstance
    public showLogs!: boolean
    public requestPath!: string
    public create!: AvailableRequests
    public update!: AvailableRequests
    public get!: AvailableRequests
    public destroy!: AvailableRequests
    
    constructor({ 
        modelName = '',
        routeExtension = '',
        showLogs = false,
        useInterceptors = false
    }: ApiOptions ) {
        console.log('constructor reached')
        this.modelName = modelName
        this.showLogs = showLogs
        this.developmentMode = process.env.NODE_ENV === 'development'
        this.originURL = this.developmentMode
            ? `${window.location.origin}/api` 
            : 'http://localhost:3001/api'
        this.apiClient = axios.create({ baseURL: this.originURL })
        if (useInterceptors) this.useAxiosInterceptors()
        this.routeExtension = routeExtension
        this.requestPath = this.originURL + routeExtension

        this.create = { 
            create: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.post(`${this.requestPath}/create`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            }
        }

        this.get = { 
            one: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.get(`${this.requestPath}/get`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            },
            many: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.get(`${this.requestPath}/get_many`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            }
        }

        this.update = { 
            one: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.put(`${this.requestPath}/update`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            },
            many: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.put(`${this.requestPath}/update_many`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            }
        }

        this.destroy = { 
            one: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.delete(`${this.requestPath}/destroy`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            },
            many: async (body = {}, params = '') => {
                this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
                try {
                    return await (this.apiClient.delete(`${this.requestPath}/destroy_many`, (body || params)))
                } catch (error) {
                    this.showLogs && this.developmentMode && this.apiErrorLog(error)
                }
            }
        }
    }

    apiRequestLog (body: AnyObject, params: string) {
        const requestName = `${String(this.apiErrorLog.caller)}`
        console.log(`${this.modelName} sends ${requestName} request with body: `, body, ` and params: `, params)
    }

    apiErrorLog (error: Error) {
        console.log(`HTTP request error in ${String(this.apiErrorLog.caller)}: `, error)
    }

    validatePath (pathString: string) {
        return pathString.charAt(0) === '/'
            ? pathString.slice(1)
            : pathString
    }
    
    useAxiosInterceptors () {
        this.apiClient.interceptors.request.use(
            async (config) => {
                const token = localStorage.getItem('token')
                config.headers.Authorization = token
                return config
                },
            (err) => Promise.reject(err)
        )
    }

    set addCreateRequest (requestOptions: RequestOptions) {
        const { requestName, controllerPathExtension } = requestOptions
        const extension = this.validatePath(controllerPathExtension)
        this.create[requestName] = async (body = {}, params = '') => {
            console.log('reached!')
            this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
            try {
                return await (this.apiClient.post(`${this.requestPath}/create/${extension}`, (body || params)))
            } catch (error) {
                this.showLogs && this.developmentMode && this.apiErrorLog(error)
            }
        }
    }
    
    set addGetRequest (requestOptions: RequestOptions) {
        const { requestName, controllerPathExtension } = requestOptions
        const extension = this.validatePath(controllerPathExtension)
        this.get[requestName] = async (body = {}, params = '') => {
            this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
            try {
                return await (this.apiClient.post(`${this.requestPath}/${extension}`, (body || params)))
            } catch (error) {
                this.showLogs && this.developmentMode && this.apiErrorLog(error)
            }
        }
    }
    
    set addUpdateRequest (requestOptions: RequestOptions) {
        const { requestName, controllerPathExtension } = requestOptions
        const extension = this.validatePath(controllerPathExtension)
        this.update[requestName] = async (body = {}, params = '') => {
            this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
            try {
                return await (this.apiClient.post(`${this.requestPath}/create/${extension}`, (body || params)))
            } catch (error) {
                this.showLogs && this.developmentMode && this.apiErrorLog(error)
            }
        }
    }
    
    set addDeleteRequest (requestOptions: RequestOptions) {
        const { requestName, controllerPathExtension } = requestOptions
        const extension = this.validatePath(controllerPathExtension)
        this.destroy[requestName] = async (body = {}, params = '') => {
            this.showLogs && this.developmentMode && this.apiRequestLog(body, params)
            try {
                return await (this.apiClient.post(`${this.requestPath}/create/${extension}`, (body || params)))
            } catch (error) {
                this.showLogs && this.developmentMode && this.apiErrorLog(error)
            }
        }
    }

    get loggingEnabled () { return this.showLogs && this.developmentMode }
    get showCurrentNodeEnv () { return process.env.NODE_ENV }
    get showRequestPath () { return this.requestPath }
    get showOriginURL () { return this.originURL }
    get showAxiosInstance () { return this.apiClient }
}