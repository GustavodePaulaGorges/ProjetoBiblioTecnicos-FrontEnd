<script>
    import { RouterLink } from "vue-router";
</script>
<template>
    <header>
    <nav>
      <RouterLink to="/">Livros</RouterLink>
      <RouterLink to="/autores">Autores</RouterLink>
      <RouterLink to="/editoras">Editoras</RouterLink>
      <RouterLink to="/categorias">Categorias</RouterLink>
      <RouterLink to="/about">About</RouterLink>

      <img src="@\components\icons\livroicon.png" class="LivroIco" />
    </nav>
  </header>
</template>
<style>
.LivroIco {
  height: 2em;
  float: right;
  margin-right: 1em;
}
  header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 2vh;
  padding: 1vh;
  box-shadow: 1px 1px 5px black;
}
a,
.green {
  text-decoration: none;
  color: rgb(173, 0, 189);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(308, 100%, 37%, 0.2);
  }
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>