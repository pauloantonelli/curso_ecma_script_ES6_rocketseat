class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class Todolist extends List{
    constructor(){
        super();
        this.usuario = "Paulo";
    }
    mostrarUsuario(){
        console.log(this.usuario);
    }
}
const MinhaLista = new Todolist();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('novo todo!');
    MinhaLista.mostrarUsuario();

}