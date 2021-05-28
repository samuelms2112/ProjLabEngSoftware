import { http } from "./config";

export default {

    listar: () => {
        return http.get('/grupo')
    },

    salvar: (grupo) => {
        return http.post('/grupo/', grupo)
    },

    editar: (grupo, id) => {
        return http.put('/grupo/' + id + '/', grupo)
    },

    pesquisa: (id) => {
        return http.get('/grupo/' + id)
    },
}