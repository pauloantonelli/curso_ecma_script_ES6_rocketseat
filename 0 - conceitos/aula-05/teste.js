function teste(x){
    let y = 2;
    console.log(x, y);
}
console.log(y);//fora de escopo do let y, vai gerar erro de referencia
teste(10);