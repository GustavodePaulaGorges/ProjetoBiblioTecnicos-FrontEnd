import axios from "axios";
export default class EditorasApi {
  async BuscarTodasAsEditoras() {
    const response = await axios.get("https://projeto-bibliotecnicos.herokuapp.com/publishers");
    return response.data;
  }

  async BuscarEditora(id) {
    const response = await axios.get(`https://projeto-bibliotecnicos.herokuapp.com/publishers${id}`);
    return response.data;
  }

  async AdicionarEditora(editora) {
    const response = await axios.post(
      "https://projeto-bibliotecnicos.herokuapp.com/publishers",
      editora
    );
    return response.data;
  }

  async ExcluirEditora(id) {
    const response = await axios.delete(`https://projeto-bibliotecnicos.herokuapp.com/publishers/${id}`);
    return response.data;
  }

  async AtualizarEditora(editora) {
    const response = await axios.put(
      `https://projeto-bibliotecnicos.herokuapp.com/publishers/${editora.id}`,
      editora
    );
    return response.data;
  }
}