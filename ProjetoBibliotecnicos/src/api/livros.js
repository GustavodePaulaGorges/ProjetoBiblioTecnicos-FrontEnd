import axios from "axios";
export default class LivrosApi {
  async BuscarTodosOsLivros() {
    const response = await axios.get("https://projeto-bibliotecnicos.herokuapp.com/books");
    return response.data;
  }

  async BuscarLivro(id) {
    const response = await axios.get(`https://projeto-bibliotecnicos.herokuapp.com/books${id}`);
    return response.data;
  }

  async AdicionarLivro(livro) {
    const response = await axios.post(
      "https://projeto-bibliotecnicos.herokuapp.com/books",
      livro
    );
    return response.data;
  }

  async ExcluirLivro(id) {
    const response = await axios.delete(`https://projeto-bibliotecnicos.herokuapp.com/books/${id}`);
    return response.data;
  }

  async AtualizarLivro(livro) {
    const response = await axios.put(
      `https://projeto-bibliotecnicos.herokuapp.com/books/${livro.id}`,
      livro
    );
    return response.data;
  }
}