import http from "../utils/http";
export const handleDaily  = (params)=>http("get","/api/find/mobileList?tag_id=283&param_str=",params)
export const handleNews  = (params)=>http("get","/api/find/mobileList?tag_id=270&param_str=",params)
export const handleEval  = (params)=>http("get","/api/find/mobileList?tag_id=281&param_str=",params)
export const handleList  = (params)=>http("get","/api/find/mobileList?tag_id=54&param_str=",params)
export const handlePad  = (params)=>http("get","/api/find/mobileList?tag_id=54&param_str=",params)
