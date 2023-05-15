const getCount = require('./getCount')
/*
- recibe una cadena, y un arreglo de cadenas
- llama a la función countItems para transformar el arreglo en un objeto
- si la cadena es una llave dentro del objeto, retorna el valor asociado a dicha llave
- si la cadena no es una llave del ojecto, retorna cero
*/

const getCountForItem = (key, items)=>{
    const count = getCount(items) 
    return key in count ? count[key] : 0
}

module.exports = getCountForItem
