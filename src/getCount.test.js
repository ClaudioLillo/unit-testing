const getCount = require('./getCount.js')

describe('getCount', ()=>{
    it('retorna false si no recibe un arreglo en el primer parámetro', ()=>{
        expect(getCount(3)).toBe(false)
    })
    it('prueba',()=>{
        expect(getCount()).toBe(false)
    })
    it('retorna el output esperado', ()=>{
        expect(getCount(['azul','rojo','rojo'])).toEqual({
            azul: 1,
            rojo: 2
        })
    })
})
