let botao = document.querySelector('btn');

botao.addEventListener('click', apertar)

function apertar(){
    let div = document.getElementById('div')
    div.innerHTML = '<i> Feito por: <br> Hugo M., Lucas D. e Yuri S. <br>- CC1B -<br> UNIP São José do Rio Preto <br><br> Obs: Site criado utilizando-se de uma empresa <strong>fictícia</strong>.<i>'
}