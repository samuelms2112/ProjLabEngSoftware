import { http } from "./config";

export default {

    listar: () => {
        return http.get('/produto')
    },

    salvar: (produto, id) => {
        return http.post('/produto/' + id + '/', produto)
    },

    editar: (produto, id) => {
        return http.put('/produto/' + id + '/', produto)
    },

    delete: (id) => {
        return http.delete('/produto/' + id + '/')
    },

    pesquisa: (id) => {
        return http.get('/produto/' + id)
    },

}