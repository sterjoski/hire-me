import axios, {
    AxiosInstance,
    AxiosInterceptorOptions,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig,
} from 'axios'

export interface HttpClientInterceptorConfig {
    onRequestFulfilled?:
        | ((
              value: InternalAxiosRequestConfig<any>,
          ) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)
        | undefined
    onResponseFulfilled?:
        | ((
              value: AxiosResponse<any, any>,
          ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)
        | undefined
    onRequestRejected?: (error: any) => any
    onResponseRejected?: (error: any) => any
    requestOptions?: AxiosInterceptorOptions
    responseOptions?: AxiosInterceptorOptions
}

export interface HttpClientConstructor {
    config: CreateAxiosDefaults<any>
    interceptorConfig?: HttpClientInterceptorConfig
}

export class HttpClient {
    http: AxiosInstance

    constructor({ config, interceptorConfig }: HttpClientConstructor) {
        this.http = axios.create(config)
        this.http.interceptors.request.use(
            interceptorConfig?.onRequestFulfilled,
            interceptorConfig?.onRequestRejected,
            interceptorConfig?.requestOptions,
        )
        this.http.interceptors.response.use(
            interceptorConfig?.onResponseFulfilled,
            interceptorConfig?.onResponseRejected,
            interceptorConfig?.responseOptions,
        )
    }

    async get<T>(path: string, config?: AxiosRequestConfig) {
        return this.http.get<T>(path, config)
    }

    async post<T>(path: string, payload?: unknown, config?: AxiosRequestConfig) {
        return this.http.post<T>(path, payload, config)
    }

    async put<T>(path: string, payload?: unknown, config?: AxiosRequestConfig) {
        return this.http.put<T>(path, payload, config)
    }

    async patch<T>(path: string, payload?: unknown, config?: AxiosRequestConfig) {
        return this.http.patch<T>(path, payload, config)
    }

    async delete<T>(path: string, config?: AxiosRequestConfig) {
        return this.http.delete<T>(path, config)
    }
}
