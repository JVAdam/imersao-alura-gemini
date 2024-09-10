function pesquisar(){
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string para armazenar os resultados
    let resultados = "";

    if(campoPesquisa == ""){
        section.innerHTML = "<p> Nada foi encontrado </p>"
        return
    }  
  
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for(let i of dados){
        titulo = i.titulo.toLowerCase();
        descricao = i.descricao.toLowerCase();
        tags = i.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>${i.titulo}</h2>
          <p class="descricao-meta">${i.descricao}</p>
          <a href="${i.link}" target="_blank">Mais informações</a>
        </div>
        `;
        }
        
    }
    if(!resultados){
        resultados = "<p> Nada foi encontrado </p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }