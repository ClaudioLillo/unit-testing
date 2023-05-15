/*
- recibe un entero y un arreglo de enteros
- si no recibe un número como primer parámetro retorna false
- si no recibe un arreglo como segundo parámetro retorna false
- retorna el máximo valor del arreglo, que sea menor que el valor limit
*/

function findMaxUnderLimit(limit, arr){
    if(!Number.isInteger(limit)){
        return false
    }
    if(!Array.isArray(arr)){
        return false
    }
    let max = arr[0]
    for (const i of arr){
        if (i > max && i < limit){
            max = i
        }
    }
    return max
}

module.exports = findMaxUnderLimit
