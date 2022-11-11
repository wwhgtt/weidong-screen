import axios from 'axios';
import * as tokenTools from '@/utils/tokenTools.js';

const BASE_URL = '/';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? BASE_URL : '/api/',
  timeout: 60000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
})

service.interceptors.request.use(config => config);

service.interceptors.response.use(res => res, error => {});

export default service;