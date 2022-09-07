import axios from 'axios';
export default class AutoresApi {
    async BuscarTodosOsAutores() {
        const response = await axios.get(`http://localhost:4000/authors`);
        return response.data;
    }

    async BuscarAutor(id) {
        const response = await axios.get(`http://localhost:4000/authors/${id}`);
        return response.data;
    }

    async AdicionarAutor(autor){
        const response = await axios.post(`http://localhost:4000/authors`, autor);
        return response.data;
    }

    async ExcluirAutor(id){
        const response = await axios.delete(`http://localhost:4000/authors/${id}`)
        return response.data
    }

    async AtualizarAutor(autor) {
        const response = await axios.put(
            `http://localhost:4000/authors/${autor.id}`, 
            autor,
        );
        return response.data
    }


}

