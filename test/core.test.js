import Core from './../src/core';
import Module from './../src/module';

jest.mock('./../src/module');

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

  it('should start single module', () => {
    const core = new Core();
    Module.mockImplementation(() => {
      return {start: jest.fn()}
    });
    core.register(Module ,'module1');
    const instance = core.start('module1');
    expect(instance.start).toHaveBeenCalled();
  });

  
});