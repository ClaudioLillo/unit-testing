// Un mock debe declararse 
jest.mock('./getCount',()=>jest.fn())
const index = require('./index.js')
const getCount = require('./getCount.js')

describe('index', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
        getCount.mockReturnValue({arroz: 3, fideos: 1, salsa: 7})
    })
    it('retorna el valor correcto cuando el objeto contiene el item', ()=>{
        expect(index('fideos', null)).toBe(1)
        
    })
    it('llama a getCount usando el arreglo que recibe como segundo parámetro',()=>{
        index('arroz', ['fideos', 'salsa', 'carne'])
        expect(getCount).toHaveBeenCalledWith(["fideos", "salsa", "carne"])
    })
})
