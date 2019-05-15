import Core from './../src/core';
import Module from './../src/module';
import Jquery from "./../src/jquery.extension";
import $ from 'jquery';

describe('provide infrastructure for module', () => {
  it('should implement core class', () => {
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

  it("should render provided argument inside DOM", () => {

    const core = new Core();
    let jquery = new Jquery();
    core.use("jquery", jquery);

    const model = "<a></a>";

    core.render(model);

    expect($("a").length).toBe(1);

  });

  it('should start single module', () => {
    const core = new Core();
    let jquery = new Jquery();
    core.use("jquery", jquery);

    const Module = jest.fn();
    Module.mockImplementation(() => {
      return {start: jest.fn()}
    });
    core.register(Module ,'module1');
    core.start('module1');
    expect(core.modulesList['module1'].start).toHaveBeenCalled();
  });

  it("should render after starting module", () => {

    const view = "asd";

    const core = new Core();

    core.render = jest.fn();

    const Module = jest.fn();
    Module.mockImplementation(() => {
      return {
        start: jest.fn(),
        view: view
      }
    });

    core.register(Module ,'module1');
    core.start('module1');

    expect(core.render).toHaveBeenCalledWith(view);
  });

  it('should remove instance from list after stop module', () => {
    const core = new Core();
    core.register(Module ,'module1');
    core.stop('module1');
    expect(core.modulesList['module1']).toBe(undefined);
    expect(core.modulesList).toEqual({});
  });

  it('should be able to register an extension on the core', () => {
    const core = new Core();
    const fn = jest.fn();
    core.use('$', fn);
    expect(core.getExtension('$')).toBe(fn);
  });
});