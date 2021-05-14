import { http } from "./config";

export default {
    authenticate: (data) => {
        return http.post('/login/', data)
    }
}