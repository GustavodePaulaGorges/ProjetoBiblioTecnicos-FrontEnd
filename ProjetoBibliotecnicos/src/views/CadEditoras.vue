<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.BuscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.AtualizarEditora(this.editora);
      } else {
        await editorasApi.AdicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.BuscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.ExcluirEditora(editora.id);
      this.editoras = await editorasApi.BuscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de editoras</h2>
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        placeholder="Nome"
        type="text"
        v-model="editora.nome"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        type="number"
        placeholder="Ano de fundação"
        v-model="editora.ano"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Redes sociais"
        type="text"
        v-model="editora.redes"
        @keyup.enter="salvar"
      />
      <input
        class="FormInput"
        placeholder="Email para contato"
        type="email"
        v-model="editora.email"
        @keyup.enter="salvar"
      />
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
    <div class="list-items">
      <div
        class="BoxInfo"
        v-for="editora in editoras"
        :key="editora.id"
      >
        <div>ID: {{ editora.id }}</div>
        <div>Nome: {{ editora.nome }}</div>
        <div>Ano de Fundação: {{ editora.ano }}</div>
        <div>Redes Sociais: {{ editora.redes }}</div>
        <div>Email Para Contato: {{ editora.email }}</div>
        <button class="BtnEdit" @click="editar(editora)">Editar</button>
        <button class="BtnEdit" @click="excluir(editora)">Excluir</button>
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
