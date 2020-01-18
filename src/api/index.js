import request, { request1 } from "../request/index";

export function fetchIndexData() {
    return request.get("/api/v1/urlJson");
}

export function fetchWebsiteConf() {
    return request1.get("/api/v1/websiteJson");
}

export function fetchIndexBg() {
    return request1.post("/api/v1/indexType");
}

export function fetchNavData() {
    return request1.post("/api/v1/indexNav");
}
