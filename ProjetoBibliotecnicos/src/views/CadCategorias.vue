<script>
  import CategoriasApi from "@/api/categorias.js";
  const categoriasApi = new CategoriasApi();
  export default {
    data() {
      return {
        categoria: {},
        categorias: [],
      };
    },
    async created() {
      this.categorias = await categoriasApi.BuscarTodasAsCategorias();
    },
    methods: {
      async salvar() {
        if (this.categoria.id) {
          await categoriasApi.AtualizarCategoria(this.categoria);
        } else {
          await categoriasApi.AdicionarCategoria(this.categoria);
        }
        this.categorias = await categoriasApi.BuscarTodasAsCategorias();
        this.categoria = {};
      },
      async excluir(categoria) {
        await categoriasApi.ExcluirCategoria(categoria.id);
        this.categorias = await categoriasApi.BuscarTodasAsCategorias();
      },
      editar(categoria) {
        Object.assign(this.categoria, categoria);
      },
    },
  };
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de categorias</h2>
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        placeholder="Nome"
        type="text"
        v-model="categoria.nome"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        type="text"
        placeholder="Descrição"
        v-model="categoria.desc"
        @keyup.enter="salvar"
      />
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
    <div class="list-items">
      <div class="BoxInfo" v-for="categoria in categorias" :key="categoria.id">
        <div>ID: {{ categoria.id }}</div>
        <div>Nome: {{ categoria.nome }}</div>
        <div>Descrição: {{ categoria.desc }}</div>
        <button class="BtnEdit" @click="editar(categoria)">Editar</button>
        <button class="BtnEdit" @click="excluir(categoria)">Excluir</button>
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
