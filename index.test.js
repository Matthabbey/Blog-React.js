const {add, eRR, promiseTest, arr, myApp } = require("./index")
const supertest = require('supertest')

test("toBe", ()=>{
    expect(add(2, 1)).toBe(3)
})

test("toEqual", ()=>{
    expect(add(2, 11)).toEqual(13)
})

test("toBeDefined", ()=>{
    expect(add(2, 4)).toBeDefined()
})
test("toBeNull", ()=>{
    expect(add(2, 1)).not.toBeNull()
})
test("toBeGreaterThan", ()=>{
    expect(add(2, 1)).toBeGreaterThan(2)
})
test("toBeLessThan", ()=>{
    expect(add(2, 1)).toBeLessThan(4)
})

test('toMatch', ()=>{
    expect(add("Hello", "World")).toMatch(/Hello/)
})

test('toThrow', ()=>{
    expect(()=>eRR()).toThrow("I am error to happen")
})
test("promiseTest", ()=>{
    promiseTest(1,2)
    .then(data=>{
        expect(data).toBe('+ve')
    }).catch(e=>{
        expect(e).toBe("-ve")
    })
})

test("promiseTest the easy way", ()=>{
    expect(promiseTest(2,1)).resolves.toBe('+ve')
})
test("promiseTest two", ()=>{
    expect(promiseTest(1, 2)).rejects.toBe('-ve')
})
test('testing an arr of string', ()=>{
    expect(arr()).toContain('Matt')
})

test('TESTING GET USER API NOW ', async()=>{
    await supertest(myApp)
    .get('/users')
    .expect(200)
    .then(result=>{
        expect(result && result.body && typeof result.body === 'object')
    })
}) 