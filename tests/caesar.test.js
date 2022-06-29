
const caesar=require('./caesar')

describe('Refreshing testing',()=>{
it('works',()=>{
    expect(caesar('a',1)).toBe('b')
});

it('still works',()=>{
    expect(caesar('a',26)).toBe('a')
});

it('still works again',()=>{
    expect(caesar('a',27)).toBe('b')
});
})