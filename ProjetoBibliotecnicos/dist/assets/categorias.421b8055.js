import{a as e}from"./index.becf6c0c.js";class r{async BuscarTodasAsCategorias(){return(await e.get("https://projeto-bibliotecnicos.herokuapp.com/categories")).data}async BuscarCategoria(o){return(await e.get(`https://projeto-bibliotecnicos.herokuapp.com/categories/${o}`)).data}async AdicionarCategoria(o){return(await e.post("https://projeto-bibliotecnicos.herokuapp.com/categories",o)).data}async ExcluirCategoria(o){return(await e.delete(`https://projeto-bibliotecnicos.herokuapp.com/categories/${o}`)).data}async AtualizarCategoria(o){return(await e.put(`https://projeto-bibliotecnicos.herokuapp.com/categories/${o.id}`,o)).data}}export{r as C};