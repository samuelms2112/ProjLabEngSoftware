import { http } from "./config";

export default {

    listar: (doc) => {
        return http.get('/contato/' + doc + '/')
    },

    salvar: (telefone, doc) => {
        return http.post('/contato/' + doc + '/', telefone)
    },

    editar: (telefone, doc) => {
        return http.put('/contato/' + doc + '/', telefone)
    },

    delete: (doc) => {
        return http.delete('/contato/' + doc + '/')
    },

    pesquisa: (doc) => {
        return http.get('/contato/' + doc)
    },

}