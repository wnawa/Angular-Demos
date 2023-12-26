import { getCurrencies } from "./getCurrencies";

describe('getCurrencies',()=>{

    it('Should return supported Curriences',()=>{
expect(getCurrencies()).toContain('EUR')
expect(getCurrencies()).toContain('AUD')
expect(getCurrencies()).toContain('USD')

    })
})