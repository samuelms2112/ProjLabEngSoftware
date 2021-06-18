import { http } from "./config";

export default {

    listar: () => {
        return http.get('/produto')
    },

    salvar: (produto) => {
        return http.post('/produto/', produto)
    },

    editar: (produto, id) => {
        return http.put('/produto/' + id + '/', produto)
    },

    delete: (id) => {
        return http.delete('/produto/' + id + '/')
    },

    pesquisa: (ean) => {
        return http.get('/produto/' + ean)
    },

}