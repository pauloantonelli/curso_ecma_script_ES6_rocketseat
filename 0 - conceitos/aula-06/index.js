const arr = [1,3,4,5,8,9];

const novoArr = arr.map(function (item, index){
    return item + index;
});
console.log(novoArr);

const novoArr2 = arr.reduce(function(total, prox){
    return total + prox;
});
console.log(novoArr2);

const novoArr3 = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(novoArr3);

const novoArr4 = arr.find(function(item){
    return item === 4;
});
console.log(novoArr4);