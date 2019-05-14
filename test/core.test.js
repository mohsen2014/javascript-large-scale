import Core from './../src/core';
import Module from './../src/module';


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
    expect(core.modulesList['module1']).toBeInstanceOf(module);
  });

  it('should start single module', () => {
    const core = new Core();
    const Module = jest.fn();
    Module.mockImplementation(() => {
      return {start: jest.fn()}
    });
    core.register(Module ,'module1');
    core.start('module1');
    expect(core.modulesList['module1'].start).toHaveBeenCalled();
  });

  it('should remove instance from list after stop module', () => {
    const core = new Core();
    core.register(Module ,'module1');
    core.stop('module1');
    expect(core.modulesList['module1']).toBe(undefined);
    expect(core.modulesList).toEqual({});
  });
});