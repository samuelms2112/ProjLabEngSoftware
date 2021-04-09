import { http } from "./config";

export default {

    listar: () => {
        return http.get('/fornecedor/listar')
    },

    novo: () => {
        return http.post('/fornecedor/novo')
    }


}