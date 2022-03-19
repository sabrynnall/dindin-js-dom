// --------- GERAL ----------
// 1 - O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#2E948A';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html

let nav = document.querySelector('#menu_opcoes nav a:nth-child(1)');

nav.setAttribute('href', 'cursos.html');

// --------- HOME ----------
// 1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

let introducao = document.getElementById('introducao');

introducao.style.justifyContent = 'space-around';

// 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let depoimentos = document.querySelector('.titulo h3');

depoimentos.innerHTML = 'O que falam sobre nós';


// 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let titulo = document.querySelector('#falam_sobre+.titulo h3');

titulo.innerHTML = 'Mais conteúdo pra você';

// 4 - Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas

let titulos = document.querySelectorAll('.titulo');

titulos.forEach((titulo) => {
    titulo.style.textTransform = 'uppercase';
})

// 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

let botao = document.getElementById('todos_posts');

botao.setAttribute('href', 'blog.html');

// 6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
