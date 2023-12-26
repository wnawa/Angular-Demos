import { greet } from './greet';
//describe it expect [toBe|toContain]
describe('greet', () => {
  it('It Should include the name in a welcome messege', () => {
    
     expect(greet('Walaa')).toContain('Walaa');
  });
});
