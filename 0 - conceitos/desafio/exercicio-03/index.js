//ARROW FUNCTIONS
//3.1
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);
console.log(arr);

//3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => console.log(usuario.idade);
mostraIdade(usuario);

//3.3
const nome = "Paulo";
const idade = 26;
const mostraUsuario = (nome = 'Luciele', idade = 21) => {
    return console.log(nome), console.log(idade)
};
mostraUsuario(nome, idade);//sobreescreve nome e idade
mostraUsuario(nome);//sobreescreve somente o nome

//3.4
const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve();
    })
}
