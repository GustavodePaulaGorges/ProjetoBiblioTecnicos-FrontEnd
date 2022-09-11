<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const autoresApi = new AutoresApi();
const categoriasApi = new CategoriasApi();
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categoria: {},
      categorias: [],
      editora: {},
      editoras: [],
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.BuscarTodosOsLivros();
    this.autores = await autoresApi.BuscarTodosOsAutores();
    this.categorias = await categoriasApi.BuscarTodasAsCategorias();
    this.editoras = await editorasApi.BuscarTodasAsEditoras();
  },
  methods: {
    emprestar() {
      alert(
        "Gostaria de fazer com esse botão diminuísse a contagem de livros no estoque em 1, e que ele mudasse pra um botão de devolução, que aumentaria o numero do estoque em 1"
      );
    },
    async salvar() {
      if (this.livro.id) {
        await livrosApi.AtualizarLivro(this.livro);
      } else {
        await livrosApi.AdicionarLivro(this.livro);
      }
      this.livros = await livrosApi.BuscarTodosOsLivros();
      this.categorias = await categoriasApi.BuscarTodasAsCategorias();
      this.editoras = await editorasApi.BuscarTodasAsEditoras();
      this.autores = await autoresApi.BuscarTodosOsAutores();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.ExcluirLivro(livro.id);
      this.livros = await livrosApi.BuscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de livros</h2>
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        placeholder="Nome"
        type="text"
        v-model="livro.nome"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Ano de lançamento"
        type="number"
        v-model="livro.data"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Preço (R$)"
        type="number"
        v-model="livro.preco"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Quantidade no Estoque"
        type="number"
        v-model="livro.qtd"
        @keyup.enter="salvar"
      />
      Editora:
      <select class="FormInput" v-model="livro.editora">
        <option
          v-for="editora of editoras"
          :key="editora.id"
          :value="editora.nome"
        >
          {{ editora.nome }}
        </option>
      </select>
      Autor:
      <select class="FormInput" v-model="livro.autor">
        <option disabled value="">Autor</option>
        <option v-for="autor of autores" :key="autor.id" :value="autor.nome">
          {{ autor.nome }}
        </option>
      </select>
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
    <div class="list-items">
      <div class="BoxInfo" v-for="livro in livros" :key="livro.id">
        <div>ID: {{ livro.id }}</div>
        <div>Nome: {{ livro.nome }}</div>
        <div>Preço: {{ livro.preco }}</div>
        <div>Ano de Lançamento: {{ livro.data }}</div>
        <div>Quantidade no Estoque: {{ livro.qtd }}</div>
        <div>Editora: {{ livro.editora }}</div>
        <div>Autor: {{ livro.autor }}</div>
        <button class="BtnEdit" @click="editar(livro)">Editar</button>
        <button class="BtnEdit" @click="excluir(livro)">Excluir</button>
        <button class="BtnBorrow" @click="emprestar()">Emprestar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.BtnBorrow {
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  background: greenyellow;
  font-weight: bolder;
}
.BoxInfo {
  width: 100%;
  box-shadow: 0.5px 0.5px 2.5px black;
  padding: 1rem;
  margin-bottom: 1vh;
}
.container {
  margin: 10px;
  margin-left: 10px;
}
.FormInput {
  margin-right: 10px;
  margin-bottom: 10px;
  outline: 1px solid black;
  border-radius: 5px;
  width: fit-content;
  max-width: 20vh;
}
.BtnSalvar {
  box-shadow: 0.5px 0.5px 2.5px black;
  margin-bottom: 1vh;
  border-radius: 5px;
  color: #ad00bd;
  background-color: inherit;
}
.BtnSalvar:hover {
  box-shadow: none;
  margin-bottom: 1vh;
  border-radius: 5px;
  color: #c503d6;
  background-color: #3030303d;
}
.BtnEdit {
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
}
.BtnEdit:hover {
  background-color: white;
  color: #303030;
}
</style>
