const arr = [1,3,4,5,6];
const newArr = arr.map(item => item * 2);

console.log(`Array Antigo: ${arr}`);
console.log(`Array Novo: ${newArr}`);

const teste = () => {
    return 'teste';
}
console.log(teste());

const testeArray = () => [1,2,3];
console.log(testeArray());

const testeString = () => 'String';
console.log(testeString());

const testeNumero = () => 3;
console.log(testeNumero());

const testeObj0 = () => {
    return { nome: 'Luciele', sexo: 'Feminino' }
};
console.log(testeObj0());
const testeObj = () => ({ nome: 'Paulo', sexo: 'Masculino' });
console.log(testeObj());