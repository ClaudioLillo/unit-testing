/*
- Recibe un arreglo de strings, si no es así retorna false
- Si recibe un arreglo vacío, devuelve false
- Retorna un objeto en que las llaves son los strings presentes en el arreglo
  y los valores son un contador de las veces que se repite cada item
*/

function getCount(items){
    if (!Array.isArray(items)){
        return false
    }
    return items.reduce((acc,item)=>{
        if(item in acc){
            acc[item]++
        }
        else{
            acc[item] = 1
        }
        return acc
    },{})
}

module.exports = getCount
