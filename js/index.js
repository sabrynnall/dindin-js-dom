// --------- GERAL ----------
// 1 - O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#2E948A';

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html

let nav = document.querySelector('#menu_opcoes nav a:nth-child(1)');

nav.setAttribute('href', 'cursos.html');

// --------- HOME ----------

let caminho = window.location.pathname;
if (caminho === '/index.html') {

    // 1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

    let introducao = document.getElementById('introducao');

    introducao.style.justifyContent = 'space-around';

    // 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

    let depoimentos = document.querySelector('.titulo.depoimento h3');

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

    let novaDiv = document.createElement('div');

    novaDiv.innerHTML = `
    <img src="/imagens/independencia_financeira.png"
    width="180px" alt="Independência Financeira"/>
    <h2>Independência Financeira</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore
    eu fugiat nulla pariatur. </p>
    <a class="comecar_agora" href="./curso.html">começar
    agora</a>`

    let cursos = document.getElementById('investimentos_poupando_independencia');

    cursos.appendChild(novaDiv);

    novaDiv.setAttribute('id', 'independencia');
}

// --------- CONTATO ----------

if (caminho === '/contato.html') {

    // 1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
    let form = document.querySelector('section #formulario form');

    form.setAttribute('action', 'sucesso.html');

    // 2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

    let campoExistente = document.querySelector('#formulario form textarea');

    let novoContato = document.createElement('input');
    novoContato.setAttribute('type', 'contato');
    novoContato.setAttribute('placeholder', 'contato')

    let formPai = document.querySelector('form');

    formPai.insertBefore(novoContato, campoExistente);

    // 3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing:border-box;

    let mensagem = document.querySelector('#formulario form textarea');

    mensagem.style.boxSizing = 'border-box';

    // 4 - O botão não está do tamanho adequado, precisa ter uma largura maior;

    let botao = document.getElementById('enviar');

    botao.style.width = '20%';

    // 5 - Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.

    let conteudoPai = document.querySelector('main');

    let novaSecao = `
        <section class='titulo depoimento'>
            <h3>Depoimentos</h3>
        </section>

        <section id='falam_sobre'>
            <div class="depoimentos">
                <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam.”
                    <br>
                    <br>
                    Wally, 25
                </p>
            </div>

            <div class="depoimentos">
                <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Jaden Smith, 23
                </p>
            </div>

            <div class="depoimentos">
                <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Whoopi Goldberg, 37
                </p>
            </div>

            <div class="depoimentos">
                <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.”
                    <br>
                    <br>
                    Janes Joplin, 29
                </p>
            </div>
        </section>`;

    conteudoPai.innerHTML = conteudoPai.innerHTML + novaSecao;

    console.log(conteudoPai);
}
