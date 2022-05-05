const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('peek on stack with three elements and remove the last element', () => {
    stack.push(5000);
    stack.push(9000);
    stack.push(10000);
    expect(stack.peek()).toBeDefined();
    stack.pop()
    expect(stack.peek()).toBe(9000);
    
});    