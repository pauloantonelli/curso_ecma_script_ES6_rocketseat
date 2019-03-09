const usuario = {
    nome: 'Paulo',
    idade: 26,
    endereco: {
        cidade: 'Taboao da Serra',
        estado: 'SC'
    },
};

const pet = {
    nome: 'Izzy',
    idade: 5,
    endereco: {
        cidade: 'Taboao da Serra',
        estado: 'SC'
    },
};

const { nome, idade, endereco: { cidade, estado } } = usuario;
console.log(estado);

function mostrarNome({ nome, idade, endereco: { cidade } }){
    console.log(nome, idade, cidade);
}

mostrarNome(pet);