function carregarTela() {
    fetch('https://fakestoreapi.com/products')
    
        .then(res => res.json())
        .then(data => {
            let str = '<h3 class="text text-center text-decoration-none">PRODUTOS</h3>'
            for (let i = 0; i < data.length; i++) {
                let produto = data[i];
                let textoPesquisa = $('#input-pesquisar').val();
                let textoCategoria = $('#select').val();
                if(textoCategoria == 'Todos')
                    textoCategoria = '';
                if((textoPesquisa != '' && produto.title.toLowerCase().indexOf(textoPesquisa.toLowerCase()) == -1) ||
                (textoCategoria !=  '' && produto.category != textoCategoria))
                    continue;

                str += `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch div-product"  data-id="${produto.id}">
                <div class="card text-center bg-light">
                    <img src="${produto.image}" class="card-img-top produto-image">
                    <div class="card-header">
                        R$ ${produto.price}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${produto.title}</h5>
                        <p class="card-text truncate-3l">
                            ${produto.description}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="d-block">
                        <a href="detalhes.html?id=${produto.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                        </div>
                        <small class="text-success">Nota ${produto.rating.rate} de ${produto.rating.count} avaliações</small>
                    </div>
                </div>
            </div>`;
            }
            document.getElementById('conteudo-produtos').innerHTML = str;
        })
}

function carregarCategoria() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => {
            let str = '<option>Todos</option>';
            for (let i = 0; i < data.length; i++) 
            {
                let categoria = data[i];
                
                str += `<option>${categoria}</option>`;
            }
            document.getElementById('select').innerHTML = str;
        })
}

carregarCategoria();
carregarTela();


let btnBuscar = document.querySelector('#buscar');
btnBuscar.addEventListener('click', carregarTela);


let selectCategoria = document.querySelector('#select');
selectCategoria.addEventListener('change', carregarTela);

