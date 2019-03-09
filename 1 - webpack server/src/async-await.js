const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

/*minhaPromise()
.then((resultado) => {
    console.log(resultado);
})
.catch((erro) => {

});*/

//ASYNC/AWAIT
/*async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}*/

//ASYNC COM ARROW FUNCTION
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();