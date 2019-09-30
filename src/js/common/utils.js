export const STATUS_OK = 200
export const STATUS_CREATED = 201
export const STATUS_UPDATED = 204
export const STATUS_DELETED = 204

export function getHeaders() {
    return {
        headers: {
            "Content-Type": "application/json"
        }
    }
}