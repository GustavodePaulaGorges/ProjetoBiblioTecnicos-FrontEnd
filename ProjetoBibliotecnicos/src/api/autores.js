import axios from 'axios';
export default class AutoresApi {
    async BuscarTodosOsAutores() {
        const response = await axios.get(`https://projeto-bibliotecnicos.herokuapp.com/authors`);
        return response.data;
    }

    async BuscarAutor(id) {
        const response = await axios.get(`https://projeto-bibliotecnicos.herokuapp.com/authors/${id}`);
        return response.data;
    }

    async AdicionarAutor(autor){
        const response = await axios.post(`https://projeto-bibliotecnicos.herokuapp.com/authors`, autor);
        return response.data;
    }

    async ExcluirAutor(id){
        const response = await axios.delete(`https://projeto-bibliotecnicos.herokuapp.com/authors/${id}`)
        return response.data
    }

    async AtualizarAutor(autor) {
        const response = await axios.put(
            `https://projeto-bibliotecnicos.herokuapp.com/authors/${autor.id}`, 
            autor,
        );
        return response.data
    }

    
}

