import http from "../utils/http";

export const goodsList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=&channel_type=",params)
export const basketballList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=basketball&channel_type=",params)
export const runList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=running&channel_type=",params)
export const fitnessList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=fitness&channel_type=",params)
export const trendList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=freestyle&channel_type=",params)

//模糊查询
export const seoList = (params) => http("get","/api/search/relatedKeywords?keywords="+params)

export const login = (params) => http("post","/user/api/login",params)
export const register = (params) => http("post","/user/api/register",params)
