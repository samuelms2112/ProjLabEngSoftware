import { http } from "./config";

export default {

    listar: (doc) => {
        return http.get('/contato/' + doc + '/')
    },

    salvar: (telefone, doc) => {
        return http.post('/contato/' + doc + '/', telefone)
    },

    editar: (telefone, doc, id) => {
        return http.put('/contato/' + doc + '/' + id + '/', telefone)
    },

    delete: (doc, id) => {
        return http.delete('/contato/' + doc + '/' + id + '/')
    },

    pesquisa: (doc) => {
        return http.get('/contato/' + doc)
    },

}