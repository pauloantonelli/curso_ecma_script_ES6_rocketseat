//REST C/ OBJETO
const usuario = {
    nome: 'Paulo',
    idade: 26,
    empresa: 'ZOOM IN IT'
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

//REST C/ ARRAYS
const arr = [1,2,3,4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//REST C/ PARAMETROS DE FUNCOES
function soma(...parametros){
    return parametros.reduce((total, next) => total + next);
}
console.log(soma(1,3,4));

//SPREAD OPERATOR tem a funcao de propagar um dado de algum objeto ou array para outra estrutura de dados

//SPREAD COM ARRAYS
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

//SPREAD C/ OBJETOS
const usuario1 = {
    nome: 'Paulo',
    idade: 26,
    empresa: 'ZOOM IN IT'
}
console.log(usuario1);
const usuario2 = { ...usuario1, nome: 'Luciele', idade: 21, empresa: 'Mamae Cláudia' };
console.log(usuario2);