const Module = require('./module');

it('should call constructor ', () => {
  const module = new Module()
  expect(module).toBeInstanceOf(Module)
  
});