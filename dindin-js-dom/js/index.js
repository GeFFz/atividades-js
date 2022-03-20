//Verificadores
let url = window.location.pathname;
let arquivoHtml = url.substring(url.lastIndexOf('/') + 1);

//// GERAL
// 1 - O header deve ter cor de fundo #2E948A
let header = document.getElementsByTagName("header");
header[0].style.backgroundColor = '#2E948A';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCurso = document.querySelector("#menu_opcoes nav a:nth-child(1)");
// linkCurso.setAttribute('href', 'cursos.html');
linkCurso.href = 'cursos.html';


////INDEX.HTML
if (arquivoHtml === 'index.html') {
    // 1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id#introducao
    document.querySelector('#introducao').style.justifyContent = 'center'

    // 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
    let depoimentosTitulo = document.querySelector(".depoimento h3");
    depoimentosTitulo.innerHTML = "O que falam sobre nós";

    // 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
    document.querySelector('.titulo:nth-child(5) h3').innerHTML = 'Mais conteúdo pra você';

    // 4 - Todos os textos que estiverem com a classe.titulodevem apresentar todas as letras maiúsculas
    let titulos = document.querySelectorAll('.titulo');
    titulos.forEach(titulo => titulo.style.textTransform = "uppercase");

    // 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
    let linkBlog = document.querySelector('#todos_posts');
    linkBlog.href = 'blog.html';

    // 6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
    let cursosHome = document.querySelector('#investimentos_poupando_independencia');
    let adicionarCursoHome = '<div id="independencia"><img src="imagens/independencia_financeira.png"width="180px" alt="Independência Financeira"><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum doloreeu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar agora</a></div>'
    cursosHome.innerHTML = cursosHome.innerHTML + adicionarCursoHome;
}


////CONTATO.HTML
if (arquivoHtml === 'contato.html') {
    // 1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
    let redirecionar = document.querySelector('#formulario form');
    redirecionar.action = "sucesso.html"

    // 2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
    let emailForm = document.querySelector('#formulario form input:nth-child(3)');
    let telefoneForm = '<input type="tel" required placeholder="telefone">';
    emailForm.insertAdjacentHTML('afterend', telefoneForm);

    // 3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing:border-box
    document.querySelector('#formulario form textarea').style.boxSizing = 'border-box';

    // 4 - O botão não está do tamanho adequado, precisa ter uma largura maior;
    document.querySelector('#formulario form button').style.width = '120px';

    // 5 - Abaixo da section do formulário, adicione uma seção de comentário igual a página Home
    let formularioContato = document.querySelector('.formulario');
    let comentariosContato =
        '<section id="falam_sobre"> <div class="depoimentos"> <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Wally, 25 </p> </div> <div class="depoimentos"> <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Jaden Smith, 23 </p> </div> <div class="depoimentos"> <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Whoopi Goldberg, 37 </p> </div> <div class="depoimentos"> <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Janes Joplin, 29 </p> </div> </section>'
    formularioContato.insertAdjacentHTML('afterend', comentariosContato);
}