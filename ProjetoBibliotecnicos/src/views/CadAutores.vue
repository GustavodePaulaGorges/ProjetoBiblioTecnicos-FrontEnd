<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },

  async created() {
    this.autores = await autoresApi.BuscarTodosOsAutores();
  },

  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.AtualizarAutor(this.autor);
      } else {
        await autoresApi.AdicionarAutor(this.autor);
      }

      this.autores = await autoresApi.BuscarTodosOsAutores();
      this.autor = {};
    },

    async excluir(autor) {
      await autoresApi.ExcluirAutor(autor.id);
      this.autores = await autoresApi.BuscarTodosOsAutores();
    },

    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de autores</h2>
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        placeholder="Nome"
        type="text"
        v-model="autor.nome"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Idade"
        type="number"
        v-model="autor.idade"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Nacionalidade"
        type="text"
        v-model="autor.nacionalidade"
        @keyup.enter="salvar"
      />
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
    <div class="list-items">
      <div
        class="BoxInfo"
        v-for="autor in autores"
        :key="autor.id"
      >
        <div>ID: {{ autor.id }}</div>
        <div>Nome: {{ autor.nome }}</div>
        <div>Idade: {{ autor.idade }}</div>
        <div>Nacionalidade: {{ autor.nacionalidade }}</div>
        <button class="BtnEdit" @click="editar(autor)">Editar</button>
        <button class="BtnEdit" @click="excluir(autor)">Excluir</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
