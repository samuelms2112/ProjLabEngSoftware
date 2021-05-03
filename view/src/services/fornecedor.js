import { http } from "./config";

export default {

    listar: () => {
        return http.get('/fornecedor/')
    },

    salvar: (fornecedor) => {
        return http.post('/fornecedor/', fornecedor)
    },

    editar: (fornecedor, doc) => {
        return http.put('/fornecedor/' + doc + '/', fornecedor)
    },


}