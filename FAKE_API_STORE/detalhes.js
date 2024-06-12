const urlParamsText = window.location.search;
const urlParams = new URLSearchParams(urlParamsText);

fetch('https://fakestoreapi.com/products/'+ urlParams.get('id'))
.then(res => res.json())
.then(data => {

    $('#titulo').text(data.title);
    $('#descricao').text(data.description);
    $('#imagem-detalhes').attr('src', data.image);
    $('#categoria').text('Categoria: ' + data.category);
    $('#preco').text('Preço: R$' + data.price);
    $('#rate').text('Nota: ' + data.rating.rate);
    $('#count').text('Avaliações: ' + data.rating.count);

})
