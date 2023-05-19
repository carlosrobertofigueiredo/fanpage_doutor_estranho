//Essa linha de código é responsável por chamar a função runApp() quando o documento HTML foi completamente carregado. Isso garante que o código JavaScript seja executado apenas quando o DOM estiver pronto.*


$(document).ready(runApp)


//Aqui começa a definição da função runApp(), que é chamada quando o documento está pronto.

function runApp() {


//Essa linha de código vincula o evento de clique em todos os elementos 'a' (links) no documento ao manipulador de eventos routerLink(). Basicamente, toda vez que um link é clicado, a função routerLink() será chamada.
  //Essa linha de código atribui um manipulador de evento para todos os elementos âncora (tags <a>) no documento HTML. Quando qualquer elemento âncora for clicado, a função routerLink será chamada. O $(document).on('click', 'a', ...) faz uso do jQuery para selecionar o documento HTML, monitorar eventos de clique em elementos âncora e chamar a função routerLink quando ocorrerem esses eventos.
    $(document).on('click', 'a', routerLink)


}

//Aqui começa a definição da função routerLink(), que é o manipulador de eventos para o clique nos links.
function routerLink() {

    //Esta linha de código obtém o valor do atributo href do link que foi clicado, remove espaços em branco extras com trim() e converte-o para letras minúsculas com toLowerCase(). O valor resultante é armazenado na variável rota.
    ////Essa linha de código obtém o valor do atributo href do elemento âncora que foi clicado. O $(this) faz uso do jQuery para referenciar o elemento âncora atual. O método attr('href') retorna o valor do atributo href, e trim() é usado para remover espaços em branco adicionais no início e no final da string. O método toLowerCase() é usado para converter a string em letras minúsculas.
    const rota = $(this).attr('href').trim().toLowerCase();

    //Essa condição verifica se a rota começa com "http://", "https://" ou "#". Se for verdadeiro, significa que é um link externo ou um link de âncora, e a função retorna true, permitindo que o navegador aja normalmente.
    //Essa linha de código verifica se a rota começa com "http://", "https://" ou "#". Se a rota começar com algum desses valores, significa que é uma rota externa ou uma âncora interna, e o fluxo de execução é interrompido retornando true. Isso permite que o navegador lide com essas rotas de forma padrão.
    if (
        rota.substr(0, 7) == 'http://' ||
        rota.substr(0, 8) == 'https://' ||
        rota.substr(0, 1) == '#'
    ) return true

    // Se a rota não for um link externo ou um link de âncora, a função continua executando o código. Ele utiliza o método $.get() para fazer uma solicitação GET para o arquivo pages/${rota}/index.html, que é a página que será carregada. Se a solicitação for bem-sucedida, a função done() é chamada com os dados retornados. Dentro do done(), o código atualiza o atributo href do elemento com o id #pageCSS para o arquivo CSS correspondente à rota, define o conteúdo do elemento main para os dados HTML retornados e usa $.getScript() para carregar o arquivo JavaScript correspondente à rota.
    // Essa linha de código faz uma solicitação GET para carregar o conteúdo HTML de um arquivo com base na rota fornecida. O template string pages/${rota}/index.html é usado para construir o caminho do arquivo HTML a ser carregado. Se a solicitação for bem-sucedida (usando o método done()), o conteúdo HTML retornado é atribuído ao elemento com o seletor #pageCSS, o conteúdo HTML retornado também é inserido no elemento <main> usando o método html(), e, em seguida, uma solicitação GET é feita para carregar o script JavaScript correspondente usando o método getScript().
    $.get(`pages/${rota}/index.html`)
        .done((data) => {
            $('#pageCSS').attr('href', `pages/${rota}/index.css`)
            $('main').html(data)
            $.getScript(`pages/${rota}/index.js`)
        })
    //Após o processamento do link, a função retorna false para impedir que o navegador siga o link normalmente. Isso é feito para evitar a atualização da página, já que o código está carregando o conteúdo da rota de forma assíncrona.
    return false
}
