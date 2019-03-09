const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Paulo', idade: 30, empresa: 'Zoom in it' },
    { nome: 'Luciele', idade: 21, empresa: 'Assados' },
    { nome: 'Giulia', idade: 20, empresa: 'Prefeitura' },
];
//MAP
const idade = usuarios.map((item) => item.idade);
console.log(idade);

//FILTER
const funcionarios = usuarios.filter((item) => {
    if(item.empresa === 'Rocketseat' && item.idade > 18){
        return item;
    }
});
console.log(funcionarios);

//FIND
const busca = usuarios.find((item) => item.empresa === 'Google');
console.log(busca);

//REDUCE
const reducao = idade.reduce((total, next) => total + next);
console.log(reducao);

//MAP + FILTER
const soma = usuarios.map((user) => ({ ...user, idade: user.idade *2 })).filter((usuario) => {
    if(usuario.idade <= 50){
        return usuario;
    }
});
console.log(soma);
