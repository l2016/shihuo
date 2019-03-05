import http from "../utils/http";
export const findDaily =(params)=>http("get","/api/find/mobileList?tag_id=283&param_str=",params)
export const findNews =(params)=>http("get","/api/find/mobileList?tag_id=270&param_str=",params)
export const findEval =(params)=>http("get","/api/find/mobileList?tag_id=281&param_str=",params)
export const findList =(params)=>http("get","/api/find/mobileList?tag_id=283&param_str=",params)
