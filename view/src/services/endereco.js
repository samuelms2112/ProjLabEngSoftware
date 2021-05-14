import { http } from "./config";

export default {

    listar: (doc) => {
        return http.get('/endereco/' + doc + '/')
    },

    salvar: (cliente, doc) => {
        return http.post('/endereco/' + doc + '/', cliente)
    },

    editar: (cliente, doc) => {
        return http.put('/endereco/' + doc + '/', cliente)
    },

    delete: (doc) => {
        return http.delete('/endereco/' + doc + '/')
    },

    pesquisa: (doc) => {
        return http.get('/endereco/' + doc)
    },

}