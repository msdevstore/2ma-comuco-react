import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_SERVER } from '../constants';

const http = axios.create({ baseURL: `${API_SERVER}/` });

const httpResponseHandler = (response: { data: any; }) => {
  return response.data;
};

const httpErrorHandler = (err: { response: any; }) => {
  const response = err?.response;
  const data = response?.data;

  if (response?.status === 400 && data && !data.message) {
    let message = 'Bad request';
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        message += `\n"${key}": ${value.join(', ')}`;
      } else {
        message += `\n"${key}": ${value}`;
      }
    });
    throw new Error({
      ...data,
      message,
    });
  }

  throw new Error({
    ...data,
    message: data?.message || 'Network Error!'
  });
};

export class HttpService {
  static get(url: string, params: any = {}, headers: any = {}, hasSpinner = false) {
    return HttpService.request('GET', url, { params, headers });
  }

  static post(url: string, body: any = {}, headers: any = {}, hasSpinner = false) {
    return HttpService.request('POST', url, { data: body, headers });
  }

  static put(url: string, body: any = {}, headers: any = {}, hasSpinner = false) {
    return HttpService.request('PUT', url, { data: body, headers });
  }

  static patch(url: string, body: any = {}, headers: any = {}, hasSpinner = false) {
    return HttpService.request('PATCH', url, { data: body, headers });
  }

  static delete(url: string, body: any = {}, headers: any = {}, hasSpinner = false) {
    return HttpService.request('DELETE', url, { data: body, headers });
  }

  static request(method: Method, url: string, options: AxiosRequestConfig) {
    const token = localStorage.getItem('access-token');
    const headers = options.headers || {};

    return http
      .request({
        ...options,
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`
        },
        method,
        url,
      })
      .then(httpResponseHandler)
      // .catch(httpErrorHandler)
      .finally(() => {
        console.log('Final')
      });
  }
}
