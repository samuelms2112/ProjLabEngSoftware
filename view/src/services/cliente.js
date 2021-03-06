import { http } from "./config";

export default {

    listar: () => {
        return http.get('/cliente/')
    },

    salvar: (cliente) => {
        return http.post('/cliente/', cliente)
    },

    editar: (cliente, doc) => {
        return http.put('/cliente/' + doc + '/', cliente)
    },

    delete: (doc) => {
        return http.delete('/cliente/' + doc + '/')
    },

    pesquisa: (doc) => {
        return http.get('/cliente/' + doc)
    },

}