const divConteudo = document.querySelector('#divConteudo');

window.onload = () => {
    loginPage();
}

function loginPage() {
    let div = document.createElement('div');
    div.id = 'div';

    let title = document.createElement('p');
    title.id = 'title';
    title.textContent = 'Sign In';

    div.appendChild(title);

    let div2 = document.createElement('div');
    div2.id = 'div2';

    let login = document.createElement('span');
    login.id = 'login';
    login.textContent = 'Email';

    let input = document.createElement('input');
    input.id = 'input';

    let button = document.createElement('button');
    button.id = 'button';
    button.textContent = 'Continue';

    let forgot = document.createElement('a');
    forgot.id = 'forgot';
    forgot.textContent = 'Forgot your password?';

    let div3 = document.createElement('div');
    div3.id = 'div3';

    // let button3 = document.createElement('button');
    // button3.id = 'button2'
    // button3.textContent = 'Sign in with Apple';

    let button4 = document.createElement('button');
    button4.id = 'button2'
    button4.textContent = 'Sign in with Facebook';

    let button5 = document.createElement('button');
    button5.id = 'button2'
    button5.textContent = 'Sign in with Google';

    let div4 = document.createElement('div');
    div4.id = 'div3';

    let newLogin = document.createElement('span');
    newLogin.id = 'login';
    newLogin.textContent = 'New to CLN?';

    let button6 = document.createElement('button');
    button6.id = 'button2'
    button6.textContent = 'Subscribe';

    // let print = document.createElement('a');
    // print.id = 'forgot';
    // print.textContent = 'Print subscriber? Activate your digital subscription';

    div2.appendChild(login);
    div2.appendChild(input);
    div2.appendChild(button);
    // div3.appendChild(button3);
    div3.appendChild(button5);
    div3.appendChild(button4);
    div2.appendChild(forgot);
    div4.appendChild(newLogin);
    div4.appendChild(button6);

    divConteudo.appendChild(div);
    divConteudo.appendChild(div2);
    divConteudo.appendChild(div3);
    divConteudo.appendChild(div4);
}