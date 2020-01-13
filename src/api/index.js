import request from "../request/index"

export function fetchIndexData() {
    return request.get("/api/v1/urlJson")
}
