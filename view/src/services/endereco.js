import { http } from "./config";

export default {

    listar: (doc) => {
        return http.get('/endereco/' + doc + '/')
    },

    salvar: (cliente, doc) => {
        return http.post('/endereco/' + doc + '/', cliente)
    },

    editar: (cliente, doc, id) => {
        return http.put('/endereco/' + doc + '/' + id + '/', cliente)
    },

    delete: (doc, id) => {
        return http.delete('/endereco/' + doc + '/' + id + '/')
    },

    pesquisa: (doc) => {
        return http.get('/endereco/' + doc)
    },

}