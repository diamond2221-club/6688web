import request, { request1 } from "../request/index";

export function fetchIndexData() {
    return request.get("/api/v1/urlJson");
}

export function fetchWebsiteConf() {
    return request1.get("/api/v1/websiteJson");
}
