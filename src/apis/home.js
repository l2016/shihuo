import http from "../utils/http";

export const goodsList = (params) => http("get","/api/homefis/getNews?pageSize=20&param_str=&type=&channel_type=",params)
