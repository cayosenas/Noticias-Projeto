window.onload = () => {
    buscarNoticias1();
    buscarNoticias2();
    buscarNoticias3();
    buscarNoticias4();
    buscarNoticias5();
    buscarNoticias6();
}

function buscarNoticias1() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 5) {
                break
            }

            let divItens = document.createElement('div');
            divItens.classList.add('divItens');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divItens.appendChild(titulo);
            divItens.appendChild(descricao);
            divConteudo1.appendChild(divItens);

            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}

function buscarNoticias2() {
    let url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 3) {
                break
            }

            let divItens = document.createElement('div');
            divItens.classList.add('divItens2');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divItens.appendChild(titulo);
            divItens.appendChild(descricao);
            divConteudo3.appendChild(divItens);

            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}

function buscarNoticias3() {
    let url = 'https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 4) {
                break
            }

            let divItens = document.createElement('div');
            divItens.classList.add('divItens3');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divItens.appendChild(titulo);
            divItens.appendChild(descricao);
            divConteudo4.appendChild(divItens);

            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}

function buscarNoticias4() {
    let url = 'https://newsapi.org/v2/everything?q=tesla&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 8) {
                break
            }

            let divItens = document.createElement('div');
            divItens.classList.add('divItens4');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divItens.appendChild(titulo);
            divItens.appendChild(descricao);
            divNoticia2.appendChild(divItens);

            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}

function buscarNoticias5() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 6) {
                break
            }

            let divCoisas = document.createElement('div');
            divCoisas.classList.add('divCoisas');

            let divItens = document.createElement('div');
            divItens.classList.add('divItens5');

            let divImg = document.createElement('div');
            divImg.classList.add('divImg');

            let imagem = document.createElement('img');
            imagem.classList.add('imagem');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divCoisas.appendChild(divImg);
            divCoisas.appendChild(divItens);
            divItens.appendChild(titulo);
            divImg.appendChild(imagem);
            divItens.appendChild(descricao);
            divConteudo5.appendChild(divCoisas);

            imagem.src = noticia[index].urlToImage;
            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}

function buscarNoticias6() {
    let url = 'https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    let contadorNoticia = 0
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {
            if (contadorNoticia == 4) {
                break
            }

            let divItens = document.createElement('div');
            divItens.classList.add('divItens3');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            divItens.appendChild(titulo);
            divItens.appendChild(descricao);
            divConteudo6.appendChild(divItens);

            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            contadorNoticia++

            titulo.addEventListener('click', (event) =>{
                let a = document.createElement('a');
                a.target = '_blank';
                a.href = noticia[index].url;
                a.click();
            });
            }
        }
    }
}