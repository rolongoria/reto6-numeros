/*Mostrar todos los numeros impares que hay entre dos numeros
impares(2, 10) // 3, 5, 7, 9*/

impares(2, 10);

function impares(inicio, fin){
    let numeros = "";
    for(let i = inicio; i <= fin; i++){
        if(i % 2 !== 0){
            numeros += i;
            if(i <= fin -2){
                numeros += ', ';
            }
        }
        
    }
    console.log(numeros);
    console.log();
}

/*Mostrar la tabla de multiplicar de un numero*/


tabla(5);

function tabla(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} * ${i} = ` + numero * i);
    }
}
console.log();

/*Recibir un array de numeros, ordenarlo y mostrarlo*/

ordenar([1,2,45,5,6,3,1,8]);
ordenar([100,5,5,8,3,7,8]);


function ordenar(arreglo){

    //Bubble sort

    for(let i = 0; i < arreglo.length; i++){
        for (let j = 0; j < arreglo.length - i - 1; j++){
            if(arreglo[j] > arreglo[j+1]){
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
        
        
    }

    console.log(arreglo);

}