const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('присваивание объекту', () => {
    const data = {один: 1};
    data['два'] = 2;
    expect(data).toEqual({один: 1, два: 2});
});

test('сложение положительных чисел не равно нулю', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
  
  test('ноль', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('два плюс два', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe и toEqual эквивалентны по отношению к числам
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('сложение чисел с плавающей запятой', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);         Это не будет работать из-за ошибки округления
    expect(value).toBeCloseTo(0.3); // А это сработает.
});

test('в команде нет места Я', () => {
    expect('команда').not.toMatch(/Я/);
});
  
test('но есть "ася" в Васе', () => {
    expect('Вася').toMatch(/ася/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
  
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}
  
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
