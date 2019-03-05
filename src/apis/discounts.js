import http from "../utils/http";
export const disData = (page)=>http("get","/api/youhui/list?r=999&page=1&page_size=30&publish_date=",{
    deviceid: "h5",
    extend: "/youhui/list?r=999&page=1&page_size=30&publish_date=",
    lang: "zh",
    os: "h5",
    param: JSON.stringify({pageindex:page}),
    sign: "f779683c8484959386bfef8effbf61de",
    version: "3.1.0",
})

export const disFootWear = (params)=>http("get","/api/youhui/list?r=1&page=1&page_size=30&publish_date=",params)

export const disCostume = (params)=>http("get","/api/youhui/list?r=2&page=1&page_size=30&publish_date=",params)

export const disCode = (params)=>http("get","/api/youhui/list?r=3&page=1&page_size=30&publish_date=",params)

export const disIterest = (params)=>http("get","/api/youhui/list?r=4&page=1&page_size=30&publish_date=",params)
