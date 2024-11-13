window.onload = () => {
    buscarNoticias1();
}


    
    

function buscarNoticias1() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ad0f934a0cd43e5b490400871fa4392';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    request.onload = () => {
        let noticia = JSON.parse(request.response).articles;
        console.log(noticia);

        for (let index = 0; index < noticia.length; index++) {
            if (noticia[index].description === '[Removed]' || noticia[index].description === null) {
                
            } else {

            let divCoisas = document.createElement('div');
            divCoisas.classList.add('divCoisas');

            let divItens = document.createElement('div');
            divItens.classList.add('divItens');

            let divImg = document.createElement('div');
            divImg.classList.add('divImg');

            let imagem = document.createElement('img');
            imagem.classList.add('imagem');

            let titulo = document.createElement('h1');
            titulo.classList.add('titulo');

            let descricao = document.createElement('span');
            descricao.classList.add('descricao');

            let botaoVoz = document.createElement('button');
            botaoVoz.classList.add('botaoVoz');

            divCoisas.appendChild(divImg);
            divCoisas.appendChild(divItens);
            divItens.appendChild(titulo);
            divImg.appendChild(imagem);
            divItens.appendChild(descricao);
            divItens.appendChild(botaoVoz);
            divContainer.appendChild(divCoisas);

            imagem.src = noticia[index].urlToImage;
            titulo.textContent = noticia[index].title;
            descricao.textContent = noticia[index].description;
            botaoVoz.textContent = '🔊';
                
            botaoVoz.addEventListener("click", (event) => {
                let texto = divCoisas.textContent;
                let narracao = speechSynthesis;
                
                let audio = new SpeechSynthesisUtterance();
                audio.text = texto;
                audio.lang = 'en-US';
                narracao.cancel();
                narracao.speak(audio);
            
                console.log(texto);
                console.log(audio)
            })

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

