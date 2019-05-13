import Core from './../src/core';

describe('provide infrastructure for module', () => {
  it('should impliment core class', () => {
    const core = new Core();
    expect(core).toBeInstanceOf(Core);
  });

  it('should accept an object as sandbox', () => {
    var fn = jest.fn();
    const core = new Core(fn);
    expect(core.sandbox).toBe(fn);
  });

  it('should gather modules in a list for management ', () => {
    const core = new Core();
    const module = jest.fn();
    core.register(module ,'module1')
    expect(core.modulesList['module1']).toBe(module);
  });
});