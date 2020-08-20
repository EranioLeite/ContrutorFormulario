/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.2.2.0 (NJsonSchema v10.1.4.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export module clientTs {

    export class Client {
        private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
        private baseUrl: string;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    
        constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
            this.http = http ? http : <any>window;
            this.baseUrl = baseUrl ? baseUrl : "";
        }
    
        /**
         * @return Success
         */
        weatherForecast(): Promise<WeatherForecast[]> {
            let url_ = this.baseUrl + "/WeatherForecast";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
    
            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processWeatherForecast(_response);
            });
        }
    
        protected processWeatherForecast(response: Response): Promise<WeatherForecast[]> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [] as any;
                    for (let item of resultData200)
                        result200!.push(WeatherForecast.fromJS(item));
                }
                return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<WeatherForecast[]>(<any>null);
        }
    
        /**
         * @return Success
         */
        email(): Promise<KRetorno> {
            let url_ = this.baseUrl + "/WeatherForecast/Email";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
    
            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processEmail(_response);
            });
        }
    
        protected processEmail(response: Response): Promise<KRetorno> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = KRetorno.fromJS(resultData200);
                return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<KRetorno>(<any>null);
        }
    
        /**
         * @return Success
         */
        excel(): Promise<KRetorno> {
            let url_ = this.baseUrl + "/WeatherForecast/Excel";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
    
            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processExcel(_response);
            });
        }
    
        protected processExcel(response: Response): Promise<KRetorno> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = KRetorno.fromJS(resultData200);
                return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<KRetorno>(<any>null);
        }
    
        /**
         * @return Success
         */
        aD(): Promise<KRetorno> {
            let url_ = this.baseUrl + "/WeatherForecast/AD";
            url_ = url_.replace(/[?&]$/, "");
    
            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
    
            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processAD(_response);
            });
        }
    
        protected processAD(response: Response): Promise<KRetorno> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = KRetorno.fromJS(resultData200);
                return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<KRetorno>(<any>null);
        }
    }
    
    export class WeatherForecast implements IWeatherForecast {
        date?: Date;
        temperatureC?: number;
        readonly temperatureF?: number;
        summary?: string | undefined;
    
        constructor(data?: IWeatherForecast) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    
        init(_data?: any) {
            if (_data) {
                this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>undefined;
                this.temperatureC = _data["temperatureC"];
                (<any>this).temperatureF = _data["temperatureF"];
                this.summary = _data["summary"];
            }
        }
    
        static fromJS(data: any): WeatherForecast {
            data = typeof data === 'object' ? data : {};
            let result = new WeatherForecast();
            result.init(data);
            return result;
        }
    
        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["date"] = this.date ? this.date.toISOString() : <any>undefined;
            data["temperatureC"] = this.temperatureC;
            data["temperatureF"] = this.temperatureF;
            data["summary"] = this.summary;
            return data; 
        }
    }
    
    export interface IWeatherForecast {
        date?: Date;
        temperatureC?: number;
        temperatureF?: number;
        summary?: string | undefined;
    }
    
    export class KRetorno implements IKRetorno {
        sucesso?: boolean;
        message?: string | undefined;
    
        constructor(data?: IKRetorno) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    
        init(_data?: any) {
            if (_data) {
                this.sucesso = _data["sucesso"];
                this.message = _data["message"];
            }
        }
    
        static fromJS(data: any): KRetorno {
            data = typeof data === 'object' ? data : {};
            let result = new KRetorno();
            result.init(data);
            return result;
        }
    
        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["sucesso"] = this.sucesso;
            data["message"] = this.message;
            return data; 
        }
    }
    
    export interface IKRetorno {
        sucesso?: boolean;
        message?: string | undefined;
    }
    
    export class ApiException extends Error {
        message: string;
        status: number; 
        response: string; 
        headers: { [key: string]: any; };
        result: any; 
    
        constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
            super();
    
            this.message = message;
            this.status = status;
            this.response = response;
            this.headers = headers;
            this.result = result;
        }
    
        protected isApiException = true;
    
        static isApiException(obj: any): obj is ApiException {
            return obj.isApiException === true;
        }
    }
    
    function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new ApiException(message, status, response, headers, null);
    }
    
    }