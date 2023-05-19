$(document).ready(runApp)

function runApp() {


    $(document).on('click', 'a', routerLink)


}


function routerLink() {

    const rota = $(this).attr('href').trim().toLowerCase();

    if (
        rota.substr(0, 7) == 'http://' ||
        rota.substr(0, 8) == 'https://' ||
        rota.substr(0, 1) == '#'
    ) return true

    $.get(`pages/${rota}/index.html`)
        .done((data) => {
            $('#pageCSS').attr('href', `pages/${rota}/index.css`)
            $('main').html(data)
            $.getScript(`pages/${rota}/index.js`)
        })

    return false
}