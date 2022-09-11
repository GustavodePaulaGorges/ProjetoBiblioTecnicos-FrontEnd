import axios from "axios";
export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get("https://projeto-bibliotecnicos.herokuapp.com/categories");
    return response.data;
  }

  async BuscarCategoria(id) {
    const response = await axios.get(`https://projeto-bibliotecnicos.herokuapp.com/categories/${id}`);
    return response.data;
  }

  async AdicionarCategoria(categoria) {
    const response = await axios.post(
      "https://projeto-bibliotecnicos.herokuapp.com/categories",
      categoria
    );
    return response.data;
  }

  async ExcluirCategoria(id) {
    const response = await axios.delete(`https://projeto-bibliotecnicos.herokuapp.com/categories/${id}`);
    return response.data;
  }

  async AtualizarCategoria(categoria) {
    const response = await axios.put(
      `https://projeto-bibliotecnicos.herokuapp.com/categories/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}